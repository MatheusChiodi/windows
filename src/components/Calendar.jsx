import { getDaysInMonth } from 'date-fns';

export default function Calendar() {
  //Pegar calendario -----------------------------------------------------------------------------------------------------
  const now = new Date();
  // mes inicia no 0
  const month = String(now.getMonth());
  const year = now.getFullYear();

  const daysInMonth = getDaysInMonth(new Date(year, month));

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const TodayDay = String(now.getDate()).padStart(2, '0');

  var nameMonth = '';
  if (month == 0) {
    nameMonth = 'January';
  } else if (month == 1) {
    nameMonth = 'February';
  } else if (month == 2) {
    nameMonth = 'March';
  } else if (month == 3) {
    nameMonth = 'April';
  } else if (month == 4) {
    nameMonth = 'May';
  } else if (month == 5) {
    nameMonth = 'June';
  } else if (month == 6) {
    nameMonth = 'July';
  } else if (month == 7) {
    nameMonth = 'August';
  } else if (month == 8) {
    nameMonth = 'September';
  } else if (month == 9) {
    nameMonth = 'October';
  } else if (month == 10) {
    nameMonth = 'November';
  } else if (month == 11) {
    nameMonth = 'December';
  }
  return (
    <>
      <div className="absolute justify-center items-center h-[100%] pb-[48px] pe-2 pt-[17%] w-full">
        <div className="h-[297px] w-[300px] ms-auto bottom-0 rounded-t-md">
          <div className="bg-[#dbe0f1f8] w-[300px] absolute bottom-[48px] rounded-md border-t">
            <div className="grid grid-cols-7 p-2">
              <div className="flex justify-between items-center w-[280px] mx-auto px-3 text-sm">
                <p>{nameMonth}</p>
                <p>{year}</p>
              </div>
            </div>
            <div className="grid grid-cols-7 p-2">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center h-[30px] border-[1px] hover:bg-[#e1e5f3] transition-all duration-500 cursor-pointer
                ${day == TodayDay ? 'bg-[#e7eaf2]' : ''}
                `}
                >
                  <p className="text-xs text-[#6e717a]">{day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
