import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import React from "react";

interface HoverCardInfoProps {
  cardTrigger: React.JSX.Element;
  cardContent: React.JSX.Element;
}

export function HoverCardOnInfo({
  cardTrigger,
  cardContent,
}: HoverCardInfoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{cardTrigger}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">{cardContent}</HoverCardContent>
    </HoverCard>
  );
}
