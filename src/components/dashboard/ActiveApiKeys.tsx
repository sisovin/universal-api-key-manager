"use client";

import { useState } from "react";
import { Search, Plus, Edit, Trash2, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  createdAt: string;
  lastUsed: string;
  status: "active" | "inactive";
}

export default function ActiveApiKeys() {
  // Sample data for demonstration
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Production API Key",
      key: "pk_live_51HG7",
      permissions: ["read", "write"],
      createdAt: "2023-10-15",
      lastUsed: "2023-11-01",
      status: "active",
    },
    {
      id: "2",
      name: "Development API Key",
      key: "pk_test_51HG7",
      permissions: ["read"],
      createdAt: "2023-09-20",
      lastUsed: "2023-10-28",
      status: "active",
    },
    {
      id: "3",
      name: "Analytics API Key",
      key: "pk_analytics_51",
      permissions: ["read"],
      createdAt: "2023-08-05",
      lastUsed: "2023-10-30",
      status: "active",
    },
    {
      id: "4",
      name: "Admin API Key",
      key: "pk_admin_51HG7",
      permissions: ["read", "write", "admin"],
      createdAt: "2023-07-12",
      lastUsed: "2023-10-31",
      status: "active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<ApiKey | null>(null);
  const [newKeyDetails, setNewKeyDetails] = useState({
    name: "",
    permissions: {
      read: true,
      write: false,
      admin: false,
    },
  });

  // Filter keys based on search term
  const filteredKeys = apiKeys.filter(
    (key) =>
      key.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.key.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle creating a new API key
  const handleCreateKey = () => {
    const newKey: ApiKey = {
      id: Math.random().toString(36).substring(7),
      name: newKeyDetails.name,
      key: `pk_${Math.random().toString(36).substring(7)}_${Date.now().toString(36)}`,
      permissions: Object.entries(newKeyDetails.permissions)
        .filter(([_, value]) => value)
        .map(([key]) => key),
      createdAt: new Date().toISOString().split("T")[0],
      lastUsed: "-",
      status: "active",
    };

    setApiKeys([...apiKeys, newKey]);
    setIsCreateDialogOpen(false);
    setNewKeyDetails({
      name: "",
      permissions: {
        read: true,
        write: false,
        admin: false,
      },
    });
  };

  // Handle editing an API key
  const handleEditKey = () => {
    if (!selectedKey) return;

    const updatedKeys = apiKeys.map((key) => {
      if (key.id === selectedKey.id) {
        return {
          ...key,
          name: newKeyDetails.name || key.name,
          permissions: Object.entries(newKeyDetails.permissions)
            .filter(([_, value]) => value)
            .map(([perm]) => perm),
        };
      }
      return key;
    });

    setApiKeys(updatedKeys);
    setIsEditDialogOpen(false);
    setSelectedKey(null);
  };

  // Handle deleting an API key
  const handleDeleteKey = () => {
    if (!selectedKey) return;

    const updatedKeys = apiKeys.filter((key) => key.id !== selectedKey.id);
    setApiKeys(updatedKeys);
    setIsDeleteDialogOpen(false);
    setSelectedKey(null);
  };

  // Open edit dialog and set selected key
  const openEditDialog = (key: ApiKey) => {
    setSelectedKey(key);
    setNewKeyDetails({
      name: key.name,
      permissions: {
        read: key.permissions.includes("read"),
        write: key.permissions.includes("write"),
        admin: key.permissions.includes("admin"),
      },
    });
    setIsEditDialogOpen(true);
  };

  // Open delete dialog and set selected key
  const openDeleteDialog = (key: ApiKey) => {
    setSelectedKey(key);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="w-full bg-background text-foreground">
      <Card className="border-border shadow-md">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-xl font-semibold">
              Active API Keys
            </CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search API keys..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="hidden sm:flex"
                title="Filter"
              >
                <Filter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hidden sm:flex"
                title="Export"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Generate Key
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Name</TableHead>
                  <TableHead>API Key</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredKeys.length > 0 ? (
                  filteredKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell>
                        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                          {key.key}••••••••••••••
                        </code>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {key.permissions.map((permission) => (
                            <Badge
                              key={permission}
                              variant="outline"
                              className="capitalize"
                            >
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{key.createdAt}</TableCell>
                      <TableCell>{key.lastUsed}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditDialog(key)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openDeleteDialog(key)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-6 text-muted-foreground"
                    >
                      No API keys found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Create API Key Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate New API Key</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Key Name</Label>
              <Input
                id="name"
                placeholder="Enter a name for this API key"
                value={newKeyDetails.name}
                onChange={(e) =>
                  setNewKeyDetails({ ...newKeyDetails, name: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label>Permissions</Label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="read"
                    checked={newKeyDetails.permissions.read}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          read: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="read">Read (View data and analytics)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="write"
                    checked={newKeyDetails.permissions.write}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          write: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="write">
                    Write (Create and update resources)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="admin"
                    checked={newKeyDetails.permissions.admin}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          admin: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="admin">
                    Admin (Full access to all resources)
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCreateKey} disabled={!newKeyDetails.name}>
              Generate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit API Key Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit API Key</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Key Name</Label>
              <Input
                id="edit-name"
                value={newKeyDetails.name}
                onChange={(e) =>
                  setNewKeyDetails({ ...newKeyDetails, name: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label>Permissions</Label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="edit-read"
                    checked={newKeyDetails.permissions.read}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          read: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="edit-read">
                    Read (View data and analytics)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="edit-write"
                    checked={newKeyDetails.permissions.write}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          write: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="edit-write">
                    Write (Create and update resources)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="edit-admin"
                    checked={newKeyDetails.permissions.admin}
                    onCheckedChange={(checked) =>
                      setNewKeyDetails({
                        ...newKeyDetails,
                        permissions: {
                          ...newKeyDetails.permissions,
                          admin: !!checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="edit-admin">
                    Admin (Full access to all resources)
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleEditKey}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete API Key Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the API
              key
              {selectedKey && <strong> "{selectedKey.name}"</strong>} and revoke
              all access using this key.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteKey}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
