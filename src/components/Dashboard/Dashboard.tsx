"use client";
// Import necessary React components and libraries
import { Analytics } from "@/network/api-urls";
import api from "@/network/interceptor";
import { AnalyticsData } from "@/types/analyticsData";
import { useEffect, useState } from "react";
import IncomeChart from "./IncomeChart";
import RevenueCard from "./RevenueCard";
import SocialMediaCards from "./SocialMediaCards";

/**
 * Dashboard component responsible for fetching and displaying campaign analytics.
 *
 * This component is **entirely client-side**, meaning it runs in the user's browser.
 * It fetches data from the server-side API and manages the UI rendering without server-side interaction.
 *
 * @returns {JSX.Element} The rendered JSX representation of the dashboard.
 */
export default function Dashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);

  // Fetches campaign statistics from the API
  const fetchCampaignStats = async () => {
    try {
      const stats = await api.get(Analytics.GET_ANALYTICS);
      setAnalytics(stats.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  // Fetches statistics upon component mount
  useEffect(() => {
    fetchCampaignStats();
  }, []);

  // Render the dashboard UI with RevenueCards and SocialMediaCards
  return (
    <>
      <div className="row">
        {analytics.map((item: AnalyticsData) => (
          <RevenueCard
            arrowType="up"
            users={analytics.length}
            label={item.campaignName}
            cost={item.cost}
            styles={{ bg: "danger", text: "white" }}
          >
            <IncomeChart />
          </RevenueCard>
        ))}
      </div>

      <div className="row">
        {analytics.map((item: AnalyticsData) => (
          <SocialMediaCards
            mediaType={item?.campaignName}
            value={item.cost}
            clicks={item?.clicks}
          />
        ))}
      </div>
    </>
  );
}
