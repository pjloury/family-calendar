import { useState } from 'react';
import { Calendar, Settings, Layout, Clock, Moon } from 'lucide-react';
import Board from './Board';

export default function FamilyCalendar() {
  const [activeView, setActiveView] = useState('calendar');

  const familyMembers = [
    { name: 'Emma', color: 'bg-purple-400', ratio: '2/2' },
    { name: 'Ethan', color: 'bg-cyan-400', ratio: '2/3' },
    { name: 'John', color: 'bg-blue-400', ratio: '1/2' },
    { name: 'Lainey', color: 'bg-pink-400', ratio: '2/3' },
    { name: 'Max', color: 'bg-yellow-400', ratio: '2/3' }
  ];

  const timeMarkers = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 2;
    const formattedHour = hour <= 12 ? hour : hour - 12;
    return `${formattedHour} pm`;
  });

  const timeToMinutes = (timeStr) => {
    const [time] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (hours < 12 && hours !== 0) hours += 12;
    return hours * 60 + (minutes || 0);
  };

  const getEventStyle = (timeRange) => {
    if (!timeRange) return { top: 0, height: '32px' };
    const [start, end] = timeRange.split(' - ');
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);
    const dayStart = timeToMinutes('2:00');
    const pixelsPerHour = 80;
    const pixelsPerMinute = pixelsPerHour / 60;
    return {
      position: 'absolute',
      top: `${(startMinutes - dayStart) * pixelsPerMinute}px`,
      height: `${(endMinutes - startMinutes) * pixelsPerMinute}px`,
      width: 'calc(100% - 8px)'
    };
  };

  const days = [
    { day: 'Thu', date: '14', events: [
      { title: '🌮 Tacos', time: '', color: 'bg-orange-200', owner: 'F' },
      { title: '🏥 Doctor Appointment', time: '2:00 - 2:30', color: 'bg-blue-200', owner: 'J' },
      { title: '🏊‍♂️ Swimming at Liam\'s', time: '4:00 - 5:30', color: 'bg-cyan-200', owner: 'E' }
    ]},
    { day: 'Fri', date: '14', events: [
      { title: '🍕 Pizza', time: '', color: 'bg-orange-200', owner: 'F' },
      { title: '🥪 Lunch with Sarah', time: '2:30 - 3:00', color: 'bg-yellow-200', owner: 'M' },
      { title: '🎹 Piano Lesson', time: '3:30 - 4:30', color: 'bg-pink-200', owner: 'L' },
      { title: '🎻 Violin Lesson', time: '5:00 - 6:00', color: 'bg-purple-200', owner: 'E' }
    ]},
    { day: 'Sat', date: '15', events: [
      { title: '✂️ Haircut', time: '2:00 - 3:30', color: 'bg-purple-200', owner: 'E' },
      { title: '🎯 Paintball', time: '2:30 - 4:00', color: 'bg-cyan-200', owner: 'E' },
      { title: '🎉 Slumber Party with Maya', time: '5:00 - 23:59', color: 'bg-pink-200', owner: 'L' }
    ]},
    { day: 'Sun', date: '16', events: [
      { title: '🍝 Spaghetti', time: '', color: 'bg-orange-200', owner: 'F' },
      { title: '🏈 Flag Football', time: '2:30 - 3:30', color: 'bg-orange-200', owner: 'F' },
      { title: '🏖️ Beach Day!', time: '2:00 - 6:00', color: 'bg-orange-200', owner: 'F' },
      { title: '🧺 Pick Up Dry Cleaning', time: '5:00 - 6:00', color: 'bg-blue-200', owner: 'J' }
    ]},
    { day: 'Mon', date: '17', events: [
      { title: '🍝 Spaghetti', time: '', color: 'bg-orange-200', owner: 'F' },
      { title: '🏈 Flag Football', time: '2:30 - 3:30', color: 'bg-orange-200', owner: 'F' },
      { title: '🧺 Pick Up Dry Cleaning', time: '5:00 - 6:00', color: 'bg-blue-200', owner: 'J' }
    ]}
  ];

  return (
    <div className="w-full h-[90vh] bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">S</span>
          <span className="font-serif text-gray-900 font-medium">Miller Family</span>
          <span className="font-serif text-gray-500">10:45 AM</span>
        </div>
        <div className="flex gap-2">
          {familyMembers.map((member, index) => (
            <div key={index} className={`w-6 h-6 rounded-full ${member.color} flex items-center justify-center text-white text-sm`}>
              {member.name[0]}
            </div>
          ))}
          <button className="px-2 py-1 text-sm bg-gray-100 rounded">Schedule</button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-16 space-y-1 bg-blue-50 rounded-lg p-2">
          <button 
            onClick={() => setActiveView('calendar')}
            className={`w-full p-2 ${activeView === 'calendar' ? 'bg-white shadow-sm' : 'hover:bg-white/60'} rounded-lg flex flex-col items-center`}
          >
            <Calendar className={`w-5 h-5 ${activeView === 'calendar' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${activeView === 'calendar' ? 'text-blue-600' : 'text-gray-500'}`}>Calendar</span>
          </button>
          <button 
            onClick={() => setActiveView('board')}
            className={`w-full p-2 ${activeView === 'board' ? 'bg-white shadow-sm' : 'hover:bg-white/60'} rounded-lg flex flex-col items-center`}
          >
            <Layout className={`w-5 h-5 ${activeView === 'board' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${activeView === 'board' ? 'text-blue-600' : 'text-gray-500'}`}>Board</span>
          </button>
          <button className="w-full p-2 hover:bg-white/60 rounded-lg flex flex-col items-center">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Chores</span>
          </button>
          <button className="w-full p-2 hover:bg-white/60 rounded-lg flex flex-col items-center">
            <Moon className="w-5 h-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Sleep</span>
          </button>
          <div className="flex-grow" />
          <button className="w-full p-2 hover:bg-white/60 rounded-lg flex flex-col items-center mt-auto">
            <Settings className="w-5 h-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Settings</span>
          </button>
        </div>

        <div className="flex-1">
          {activeView === 'calendar' ? (
            <div className="flex gap-4 flex-1 overflow-hidden">
              <div className="w-16 pt-12 h-[440px]">
                <div className="relative h-full">
                  {timeMarkers.map((time, index) => (
                    <div key={index} className="h-20 relative">
                      <span className="absolute -top-3 text-xs text-gray-500">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto h-[440px]">
                <div className="grid grid-cols-5 gap-4">
                  {days.map((day, dayIndex) => (
                    <div key={dayIndex} className="relative">
                      <div className="sticky top-0 z-10 bg-white mb-2">
                        <span className="font-serif font-medium">{day.day}</span>
                        <span className="font-serif text-gray-500 ml-2">{day.date}</span>
                      </div>
                      
                      <div className="sticky top-8 z-10 bg-white mb-2">
                        {day.events
                          .filter(event => !event.time)
                          .map((event, eventIndex) => (
                            <div
                              key={`allday-${eventIndex}`}
                              className={`${event.color} p-2 rounded-lg mb-1`}
                            >
                              <div className="text-sm font-medium">{event.title}</div>
                            </div>
                          ))}
                      </div>

                      <div className="relative" style={{ height: '880px' }}>
                        {day.events
                          .filter(event => event.time)
                          .map((event, eventIndex) => (
                            <div
                              key={`timed-${eventIndex}`}
                              className={`${event.color} p-2 rounded-lg absolute w-full`}
                              style={getEventStyle(event.time)}
                            >
                              <div className="text-sm font-medium">{event.title}</div>
                              <div className="text-xs text-gray-600">{event.time}</div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Board />
          )}
        </div>
      </div>

      <button className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
        +
      </button>
    </div>
  );
}