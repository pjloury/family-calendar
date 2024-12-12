import { Star, Camera, Gift } from 'lucide-react';

const Board = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Top grid of equal-sized modules */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Skylight Tip of the Day
          </h3>
          <p className="text-sm text-gray-600">
            Let whoever completes all their chores pick what's for dinner one night! 🎉
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Plus Members</h3>
          <p className="text-sm text-gray-600">
            Did you know? Plus Members get access to a fun advent holiday calendar 🎅🏼☃️!
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-green-600" />
            Recipe Spotlight
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              🥗
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Rainbow veggie wrap that Timmy will love. Tap to view recipe.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-500" />
            Member Spotlight
          </h3>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
              👤
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Kim from Topeka loves how the Memories feature has taught her young daughter to share what she is grateful for 💝
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Memories module */}
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <Camera className="w-5 h-5 text-orange-500" />
          Memories
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="aspect-square bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center">
            <Camera className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Chore champion!</span>
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center">
            <Camera className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Timmy's first swim class</span>
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center">
            <Camera className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Trip to Sonoma</span>
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center">
            <Camera className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Family craft night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;