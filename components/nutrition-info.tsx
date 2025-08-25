"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Activity, Zap, Shield } from "lucide-react";

interface NutritionData {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sodium: string;
  sugar: string;
  glycemicIndex?: string;
  servingSize: string;
  keyNutrients: string[];
}

interface NutritionInfoProps {
  nutrition: NutritionData;
  itemName: string;
}

export function NutritionInfo({ nutrition, itemName }: NutritionInfoProps) {
  const macroNutrients = [
    { label: "Protein", value: nutrition.protein, icon: Activity, color: "text-green-600" },
    { label: "Carbs", value: nutrition.carbs, icon: Zap, color: "text-blue-600" },
    { label: "Fat", value: nutrition.fat, icon: Shield, color: "text-red-600" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Info className="h-4 w-4" />
          Nutrition Facts
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Nutrition Facts
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {itemName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Serving Size & Calories */}
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="text-sm text-gray-600 mb-1">Serving Size</div>
            <div className="font-medium text-gray-900">{nutrition.servingSize}</div>
            <div className="text-2xl font-bold text-green-700 mt-2">
              {nutrition.calories} <span className="text-base font-normal">calories</span>
            </div>
          </div>

          {/* Macronutrients */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Macronutrients</h4>
            <div className="grid grid-cols-3 gap-3">
              {macroNutrients.map((macro) => (
                <div key={macro.label} className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                  <macro.icon className={`h-5 w-5 mx-auto mb-1 ${macro.color}`} />
                  <div className="text-xs text-gray-600">{macro.label}</div>
                  <div className="font-semibold text-gray-900">{macro.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Nutrients */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Other Nutrients</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Fiber</span>
                <span className="font-medium text-gray-900">{nutrition.fiber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sodium</span>
                <span className="font-medium text-gray-900">{nutrition.sodium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sugar</span>
                <span className="font-medium text-gray-900">{nutrition.sugar}</span>
              </div>
              {nutrition.glycemicIndex && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Glycemic Index</span>
                  <span className="font-medium text-gray-900">{nutrition.glycemicIndex}</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Nutrients */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Nutrients</h4>
            <div className="flex flex-wrap gap-2">
              {nutrition.keyNutrients.map((nutrient) => (
                <Badge key={nutrient} variant="secondary" className="text-xs">
                  {nutrient}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}