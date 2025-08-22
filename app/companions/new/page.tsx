import CompanionForm from "@/components/CompanionForm";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect, Link } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companion Limit Reached"
            width={360}
            height={230}
          />

          <div className="cta-badge">Upgrade your plan</div>
          <h1>You have reached your companion limit</h1>
          <p>
            You've reached your companion limit. Upgrade your plan to create
            more companions and access premium features.
          </p>
          <Link
            href="/suscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
