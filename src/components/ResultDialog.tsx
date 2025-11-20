// src/components/ResultDialog.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type SubmitResult = { ok: boolean; title: string; body: string };

export default function ResultDialog({
  open,
  onOpenChange,
  result,
  onClose,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  result: SubmitResult | null;
  onClose: () => void;
}) {
  const isOk = !!result?.ok;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${
                isOk
                  ? "bg-green-50 text-green-600 ring-green-100"
                  : "bg-red-50 text-red-600 ring-red-100"
              }`}
              aria-hidden
            >
              {/* simple icons via emoji; swap to lucide if you like */}
              <span className="text-xl">{isOk ? "✅" : "⚠️"}</span>
            </span>
            <h3 className="font-semibold text-gray-900 mb-0">
              {result?.title ?? (isOk ? "Success" : "Something went wrong")}
            </h3>
          </div>
          <DialogDescription className="pt-2 text-gray-600 text-center">
            {result?.body ??
              (isOk
                ? "We received your message."
                : "Please try again later.")}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="button"
            onClick={onClose}
            className={isOk ? "bg-green-600 text-white" : "bg-red-600 text-white"}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
