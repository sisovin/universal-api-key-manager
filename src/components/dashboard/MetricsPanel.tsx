"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Download, Filter, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface MetricView {
  // union of allowed metric view keys
  // using same keys as Dashboard
  // 'rate-limits' (plural) to match Dashboard
  // represented as a string literal union
}

interface MetricsPanelProps {
  className?: string;
  activeView: "request-volume" | "rate-limits" | "error-logs";
  onViewChange: Dispatch<SetStateAction<"request-volume" | "rate-limits" | "error-logs">>;
}

const MetricsPanel = ({ className = "", activeView, onViewChange }: MetricsPanelProps) => {
  const [activeTab, setActiveTab] = useState<string>(activeView ?? "request-volume");

  useEffect(() => {
    if (activeView && activeView !== activeTab) {
      setActiveTab(activeView);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeView]);

  // update both internal state and notify parent when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // cast is safe because the component only uses the three known values
    onViewChange(value as "request-volume" | "rate-limits" | "error-logs");
  };

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeRange, setTimeRange] = useState("24h");
  const [service, setService] = useState("all");

  // Mock data for charts
  const requestVolumeData = [
    { time: "00:00", count: 120 },
    { time: "04:00", count: 80 },
    { time: "08:00", count: 230 },
    { time: "12:00", count: 300 },
    { time: "16:00", count: 270 },
    { time: "20:00", count: 150 },
  ];

  const rateLimitData = [
    {
      service: "Authentication API",
      limit: 1000,
      used: 650,
      status: "healthy",
    },
    {
      service: "Data Processing API",
      limit: 500,
      used: 480,
      status: "warning",
    },
    { service: "Analytics API", limit: 2000, used: 1200, status: "healthy" },
    { service: "Notification API", limit: 300, used: 290, status: "critical" },
  ];

  const errorLogsData = [
    {
      id: 1,
      timestamp: "2023-05-15 14:32:45",
      service: "Authentication API",
      errorType: "Rate Limit Exceeded",
      message: "Too many requests from client IP 192.168.1.1",
    },
    {
      id: 2,
      timestamp: "2023-05-15 15:10:22",
      service: "Data Processing API",
      errorType: "Authentication Failed",
      message: "Invalid API key provided",
    },
    {
      id: 3,
      timestamp: "2023-05-15 16:05:11",
      service: "Analytics API",
      errorType: "Timeout",
      message: "Request timed out after 30s",
    },
    {
      id: 4,
      timestamp: "2023-05-15 16:45:33",
      service: "Notification API",
      errorType: "Bad Request",
      message: "Missing required parameters",
    },
  ];

  return (
    <div className={`w-full bg-background ${className}`}>
      <Tabs
        defaultValue="request-volume"
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="request-volume">Request Volume</TabsTrigger>
            <TabsTrigger value="rate-limits">Rate Limit Status</TabsTrigger>
            <TabsTrigger value="error-logs">Error Logs</TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">Last Hour</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[240px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="request-volume" className="mt-0">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>API Request Volume</CardTitle>
                  <CardDescription>
                    Overview of API request volume over time
                  </CardDescription>
                </div>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="auth">Authentication API</SelectItem>
                    <SelectItem value="data">Data Processing API</SelectItem>
                    <SelectItem value="analytics">Analytics API</SelectItem>
                    <SelectItem value="notification">
                      Notification API
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                {/* Chart would be rendered here - using placeholder for now */}
                <div className="text-center">
                  <p className="text-muted-foreground">Request Volume Chart</p>
                  <div className="flex justify-center gap-4 mt-4">
                    {requestVolumeData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-primary w-10 rounded-t-md"
                          style={{ height: `${item.count / 3}px` }}
                        />
                        <span className="text-xs mt-1">{item.time}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline">Total: 1,150 requests</Badge>
                  <Badge variant="outline">Avg: 48 req/hour</Badge>
                  <Badge variant="outline">Peak: 300 req/hour</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rate-limits" className="mt-0">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Rate Limit Status</CardTitle>
                  <CardDescription>
                    Current rate limit usage across services
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Configure Alerts
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rateLimitData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.service}</span>
                      <Badge
                        variant={
                          item.status === "critical"
                            ? "destructive"
                            : item.status === "warning"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {item.used} / {item.limit}
                      </Badge>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.status === "critical"
                            ? "bg-destructive"
                            : item.status === "warning"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        style={{ width: `${(item.used / item.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t pt-4">
                <h4 className="text-sm font-medium mb-2">
                  Historical Limit Usage
                </h4>
                <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                  <p className="text-muted-foreground">
                    Historical Rate Limit Chart
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="error-logs" className="mt-0">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Error Logs</CardTitle>
                  <CardDescription>
                    Recent API errors and exceptions
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Search errors..." className="w-[250px]" />
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-xs font-medium">
                  <div className="col-span-2">Timestamp</div>
                  <div className="col-span-2">Service</div>
                  <div className="col-span-2">Error Type</div>
                  <div className="col-span-6">Message</div>
                </div>
                {errorLogsData.map((error) => (
                  <div
                    key={error.id}
                    className="grid grid-cols-12 p-3 text-sm border-t hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="col-span-2 text-muted-foreground">
                      {error.timestamp}
                    </div>
                    <div className="col-span-2">{error.service}</div>
                    <div className="col-span-2">
                      <Badge
                        variant={
                          error.errorType.includes("Rate Limit")
                            ? "destructive"
                            : error.errorType.includes("Authentication")
                              ? "secondary"
                              : "outline"
                        }
                        className="font-normal"
                      >
                        {error.errorType}
                      </Badge>
                    </div>
                    <div className="col-span-6 truncate">{error.message}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Showing 4 of 120 errors
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MetricsPanel;
