"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/Firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  MessageCircle,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  timestamp: { toDate: () => Date };
  isRead: boolean;
};

type Quote = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  details: string;
  timestamp: { toDate: () => Date };
  isRead: boolean;
};

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("contacts");
  const [loading, setLoading] = useState(true);

  // Fetch contacts and quotes
  useEffect(() => {
    const unsubscribeContacts = onSnapshot(
      query(collection(db, "contacts")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isRead: doc.data().isRead || false,
        })) as Contact[];
        setContacts(data);
      }
    );

    const unsubscribeQuotes = onSnapshot(
      query(collection(db, "quotes")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isRead: doc.data().isRead || false,
        })) as Quote[];
        setQuotes(data);
      }
    );

    setLoading(false);
    return () => {
      unsubscribeContacts();
      unsubscribeQuotes();
    };
  }, []);

  const markAsRead = async (id: string, type: "contact" | "quote") => {
    const ref = doc(db, `${type}s`, id);
    await updateDoc(ref, { isRead: true });
  };

  const filteredData = (data: Contact[] | Quote[]) =>
    data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatTime = (timestamp: { toDate: () => Date }) => {
    return timestamp.toDate().toLocaleString("en-KE", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Submissions Dashboard</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full md:w-1/2 text-gray-800"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="contacts" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="contacts">
            Contacts
            {contacts.filter((c) => !c.isRead).length > 0 && (
              <Badge className="ml-2 bg-blue-600 text-white">
                {contacts.filter((c) => !c.isRead).length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="quotes">
            Quotes
            {quotes.filter((q) => !q.isRead).length > 0 && (
              <Badge className="ml-2 bg-blue-600 text-white">
                {quotes.filter((q) => !q.isRead).length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Contacts Tab */}
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <Mail className="h-5 w-5" />
                Contact Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : filteredData(contacts).length === 0 ? (
                <p className="text-gray-500">No contacts found.</p>
              ) : (
                <div className="space-y-4">
                  {filteredData(contacts).map((contact) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 border rounded-lg ${
                        !contact.isRead
                          ? "border-blue-300 bg-blue-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">
                              {contact.name}
                            </h3>
                            {!contact.isRead && (
                              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-700">
                            {contact.email}
                          </p>
                          {contact.phone && (
                            <p className="text-sm text-gray-700 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              {contact.phone}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" />
                            {formatTime(contact.timestamp)}
                          </p>
                          <p className="text-sm mt-1 text-gray-800">
                            <span className="font-medium">Service:</span>{" "}
                            {contact.service}
                          </p>
                          {contact.company && (
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Company:</span>{" "}
                              {contact.company}
                            </p>
                          )}
                          {contact.budget && (
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Budget:</span>{" "}
                              {contact.budget}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(contact.id, "contact")}
                          disabled={contact.isRead}
                        >
                          {contact.isRead ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            "Mark as Read"
                          )}
                        </Button>
                      </div>
                      {contact.message && (
                        <p className="mt-3 text-gray-800">{contact.message}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Quotes Tab */}
        <TabsContent value="quotes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <MessageCircle className="h-5 w-5" />
                Quote Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : filteredData(quotes).length === 0 ? (
                <p className="text-gray-500">No quotes found.</p>
              ) : (
                <div className="space-y-4">
                  {filteredData(quotes).map((q) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 border rounded-lg ${
                        !q.isRead
                          ? "border-blue-300 bg-blue-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">
                              {q.name}
                            </h3>
                            {!q.isRead && (
                              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-700">{q.email}</p>
                          {q.phone && (
                            <p className="text-sm text-gray-700 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              {q.phone}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" />
                            {formatTime(q.timestamp)}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(q.id, "quote")}
                          disabled={q.isRead}
                        >
                          {q.isRead ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            "Mark as Read"
                          )}
                        </Button>
                      </div>
                      {q.details && (
                        <p className="mt-3 text-gray-800">{q.details}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
