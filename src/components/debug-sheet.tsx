"use client"

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";
import { Session } from 'next-auth';

export function DebugSheet({ session }: { session: Session }) {


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50">
          <Bug className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Debug Information</SheetTitle>
          <SheetDescription>
            This sheet displays useful debugging information.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Session Data:</h3>
          <pre className="mt-2 whitespace-pre-wrap break-words bg-muted p-4 rounded-md">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </SheetContent>
    </Sheet>
  );
}