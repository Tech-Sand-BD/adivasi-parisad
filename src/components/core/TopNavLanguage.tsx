"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, Check } from "lucide-react";

export function TopNavLanguage() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<string>("English");

  const languages = [
    { label: "বাংলা", icon: <Globe className="w-4 h-4 mr-2" /> },
    { label: "English", icon: <Globe className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="bg-[#658431] py-2">
      <div className="max-w-[1250px] px-2 mx-auto flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              {languages.find((lang) => lang.label === selectedLanguage)?.icon}
              {selectedLanguage}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 bg-white rounded-lg shadow-md">
            {languages.map((language) => (
              <DropdownMenuCheckboxItem
                key={language.label}
                checked={selectedLanguage === language.label}
                onCheckedChange={() => setSelectedLanguage(language.label)}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                {language.icon}
                {language.label}
                {selectedLanguage === language.label && (
                  <Check className="ml-2 w-4 h-4 text-green-500" />
                )}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
