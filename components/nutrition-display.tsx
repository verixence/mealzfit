"use client";

import type { NutritionData } from "@/lib/types";

interface NutritionDisplayProps {
  nutrition: NutritionData;
}

export function NutritionDisplay({ nutrition }: NutritionDisplayProps) {
  return (
    <div className="nutrition-facts">
      <div className="text-sm font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
        Nutrition Facts
      </div>
      
      {/* Calories and Serving */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-gray-900">{nutrition.calories} Calories</span>
        <span className="text-sm text-gray-600">{nutrition.servingSize}</span>
      </div>

      {/* Macronutrients */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">{nutrition.protein}</div>
          <div className="text-xs text-gray-600">Protein</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">{nutrition.carbs}</div>
          <div className="text-xs text-gray-600">Carbs</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-600">{nutrition.fat}</div>
          <div className="text-xs text-gray-600">Fat</div>
        </div>
      </div>

      {/* Other nutrients */}
      <div className="text-xs space-y-1 border-t border-gray-200 pt-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Fiber:</span>
          <span className="font-medium text-gray-800">{nutrition.fiber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Sodium:</span>
          <span className="font-medium text-gray-800">{nutrition.sodium}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Sugar:</span>
          <span className="font-medium text-gray-800">{nutrition.sugar}</span>
        </div>
        {nutrition.glycemicIndex && (
          <div className="flex justify-between">
            <span className="text-gray-600">Glycemic Index:</span>
            <span className="font-medium text-green-600">{nutrition.glycemicIndex}</span>
          </div>
        )}
      </div>
    </div>
  );
}