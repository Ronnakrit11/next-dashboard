import AnalyticsCard from "@/components/dashboard/analytics-card";
import TeamList from "@/components/teams/team-list";
import TeamCard from "@/components/teams/teams-card";
import { TeamSchema } from "@/types/team-schema";
import { z } from "zod";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { getRoleStatus } from "@/server/actions/get-role-status";
import { User } from "@prisma/client";

export type Team = User;

export default async function page() {
  const team = await db.user.findMany({});
  const session = await auth();
  if (!session) redirect("/");

  const role = await getRoleStatus();

  return (
    <div className="p-6">
      <TeamList data={team} role={role!} />
    </div>
  );
}