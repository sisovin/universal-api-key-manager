"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  MoonIcon,
  SunIcon,
  KeyRound,
  BarChart3,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { useTheme } from "next-themes";
import ActiveApiKeys from "./ActiveApiKeys";
import MetricsPanel from "./MetricsPanel";

type MetricView = "request-volume" | "rate-limits" | "error-logs";

interface DashboardProps {
  username?: string;
}

export default function Dashboard({ username = "User" }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"api-keys" | "metrics">(
    "api-keys",
  );
  const [activeMetricView, setActiveMetricView] =
    useState<MetricView>("request-volume");
  const { theme, setTheme } = useTheme();

  const handleMetricViewChange = (view: MetricView) => {
    setActiveMetricView(view);
    setActiveTab("metrics");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <KeyRound className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">API Key Management</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Welcome, {username}
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Dashboard Summary Cards */}
        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
          <Card
            onClick={() => setActiveTab("api-keys")}
            className="cursor-pointer hover:border-primary transition-colors"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Active API Keys
                </p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <KeyRound className="w-8 h-8 text-primary" />
            </CardContent>
          </Card>

          <Card
            onClick={() => handleMetricViewChange("request-volume")}
            className="cursor-pointer hover:border-primary transition-colors"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Requests
                </p>
                <h3 className="text-2xl font-bold">1.2M</h3>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </CardContent>
          </Card>

          <Card
            onClick={() => handleMetricViewChange("rate-limits")}
            className="cursor-pointer hover:border-primary transition-colors"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Rate Limit Status
                </p>
                <h3 className="text-2xl font-bold">85%</h3>
              </div>
              <Activity className="w-8 h-8 text-primary" />
            </CardContent>
          </Card>

          <Card
            onClick={() => handleMetricViewChange("error-logs")}
            className="cursor-pointer hover:border-primary transition-colors"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Error Rate
                </p>
                <h3 className="text-2xl font-bold">0.8%</h3>
              </div>
              <AlertTriangle className="w-8 h-8 text-primary" />
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as "api-keys" | "metrics")
          }
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="api-keys" className="flex items-center gap-2">
              <KeyRound className="w-4 h-4" />
              API Keys
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="api-keys" className="space-y-4">
            <ActiveApiKeys />
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4">
            <MetricsPanel
              activeView={activeMetricView}
              onViewChange={setActiveMetricView}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
          <p>© 2023 Universal API Key Management. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
