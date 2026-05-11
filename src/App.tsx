/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Info, LogIn, RefreshCw, Share } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [campus, setCampus] = useState('--Chọn--');
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'exams', 'news-detail', or any link title
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const newsItems = [
    {
      id: 1,
      title: "Thông báo về việc đăng ký học kỳ Summer 2026",
      date: "01/04/2026",
      content: "Sinh viên lưu ý thời gian đăng ký học kỳ Summer 2026 bắt đầu từ ngày 12/05/2026 đến hết ngày 15/04/2026. Vui lòng kiểm tra khung chương trình và lộ trình học tập trước khi đăng ký. Hệ thống sẽ mở cổng đăng ký vào lúc 8h00 sáng ngày 05/04. Các trường hợp đăng ký muộn sẽ không được giải quyết.",
      author: "Phòng Đào tạo"
    },
    {
      id: 2,
      title: "Lịch thi học kỳ Spring 2026 (Chính thức)",
      date: "30/03/2026",
      content: "Lịch thi học kỳ Spring 2026 đã được cập nhật chính thức trên hệ thống FAP. Sinh viên truy cập mục 'View exam schedule' để kiểm tra lịch thi chi tiết của mình. Mọi thắc mắc về lịch thi vui lòng liên hệ phòng Khảo thí trước ngày 03/04/2026.",
      author: "Phòng Khảo thí"
    },
    {
      id: 3,
      title: "Thông báo về việc nộp học phí kỳ Summer 2026",
      date: "25/03/2026",
      content: "Sinh viên Lê Thị Quỳnh vui lòng hoàn thành học phí môn bổ sung dành cho sinh viên học vượt – Lập trình Apps nâng cao "MAD1014" với số tiền 4.500.000 VNĐ. Thời gian đóng học phí từ ngày 01/05/2026 đến hết ngày 12/05/2026. Sau thời hạn trên, lịch học vượt sẽ được kết thúc sau thời hạn đóng tiền nếu chưa hoàn thành theo quy định.
",
      author: "Phòng Tài vụ"
    }
  ];

  const tabContents: Record<string, React.ReactNode> = {
    'Academic Regulations': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Academic Regulations (Quy định học tập)</h2>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded">
          <p className="font-bold mb-2">1. General Provisions</p>
          <p>Students must comply with all academic rules set by FPT University. This includes attendance, assignment submissions, and exam conduct.</p>
          <p className="font-bold mt-4 mb-2">2. Attendance Requirement</p>
          <p>Minimum attendance of 80% is required for all subjects to be eligible for the final examination.</p>
          <p className="font-bold mt-4 mb-2">3. Grading System</p>
          <p>Grades are calculated based on a weighted average of progress tests, assignments, and final exams.</p>
        </div>
      </div>
    ),
    'Financial Regulations': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Financial Regulations (Quy định tài chính)</h2>
        <div className="p-4 bg-yellow-50 border border-yellow-100 rounded">
          <p className="font-bold text-red-600 mb-2">Important Notice on Tuition Fees</p>
          <p>Tuition fees must be paid in full before the start of each semester. Late payments may result in suspension of studies.</p>
          <p className="mt-4">For the Summer 2026 semester, the deadline is April 5th, 2026.</p>
        </div>
      </div>
    ),
    'University timetable': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">University Timetable (Lịch học toàn trường)</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
            <p className="font-bold text-[#337ab7]">Summer 2026 - Official Timetable</p>
            <p className="text-xs text-gray-500">Updated: 01/04/2026</p>
          </div>
          <div className="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
            <p className="font-bold text-[#337ab7]">Spring 2026 - Archive</p>
            <p className="text-xs text-gray-500">Updated: 01/01/2026</p>
          </div>
        </div>
      </div>
    ),
    'Attendance report': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Attendance Report (Báo cáo điểm danh)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Subject</th>
                <th className="border border-gray-300 p-2">Total Slots</th>
                <th className="border border-gray-300 p-2">Absent</th>
                <th className="border border-gray-300 p-2">Absent %</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">SWE302</td>
                <td className="border border-gray-300 p-2 text-center">30</td>
                <td className="border border-gray-300 p-2 text-center">1</td>
                <td className="border border-gray-300 p-2 text-center">3.33%</td>
                <td className="border border-gray-300 p-2 text-green-600 font-bold text-center">Safe</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">PRN211</td>
                <td className="border border-gray-300 p-2 text-center">30</td>
                <td className="border border-gray-300 p-2 text-center">4</td>
                <td className="border border-gray-300 p-2 text-center">13.33%</td>
                <td className="border border-gray-300 p-2 text-green-600 font-bold text-center">Safe</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">EXE201</td>
                <td className="border border-gray-300 p-2 text-center">15</td>
                <td className="border border-gray-300 p-2 text-center">0</td>
                <td className="border border-gray-300 p-2 text-center">0%</td>
                <td className="border border-gray-300 p-2 text-green-600 font-bold text-center">Safe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    'Mark Report': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Mark Report (Báo cáo điểm)</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded">
            <p className="font-bold text-[#337ab7] mb-2">Semester: Spring 2026</p>
            <table className="w-full border-collapse border border-gray-300 text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Subject</th>
                  <th className="border border-gray-300 p-2">Progress</th>
                  <th className="border border-gray-300 p-2">Final</th>
                  <th className="border border-gray-300 p-2">Average</th>
                  <th className="border border-gray-300 p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">CSI104</td>
                  <td className="border border-gray-300 p-2 text-center">8.5</td>
                  <td className="border border-gray-300 p-2 text-center">7.0</td>
                  <td className="border border-gray-300 p-2 text-center">7.6</td>
                  <td className="border border-gray-300 p-2 text-green-600 font-bold text-center">Passed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">MAE101</td>
                  <td className="border border-gray-300 p-2 text-center">9.0</td>
                  <td className="border border-gray-300 p-2 text-center">8.0</td>
                  <td className="border border-gray-300 p-2 text-center">8.4</td>
                  <td className="border border-gray-300 p-2 text-green-600 font-bold text-center">Passed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    'Curriculum': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Curriculum (Khung chương trình)</h2>
        <p>Major: Software Engineering (Kỹ thuật phần mềm)</p>
        <div className="space-y-2">
          <div className="p-2 bg-gray-50 border-l-4 border-[#337ab7]">Semester 1: Introduction to Computing</div>
          <div className="p-2 bg-gray-50 border-l-4 border-[#337ab7]">Semester 2: Programming Fundamentals</div>
          <div className="p-2 bg-gray-50 border-l-4 border-[#337ab7]">Semester 3: Data Structures and Algorithms</div>
          <div className="p-2 bg-gray-50 border-l-4 border-[#337ab7]">Semester 4: Software Requirement</div>
        </div>
      </div>
    ),
    'Transaction history': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Transaction History (Lịch sử giao dịch)</h2>
        <table className="w-full border-collapse border border-gray-300 text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">01/01/2026</td>
              <td className="border border-gray-300 p-2 text-right">30,000,000 VNĐ</td>
              <td className="border border-gray-300 p-2">Tuition Fee Spring 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    'Student Profile': (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#444] border-b pb-2">Student Profile (Hồ sơ sinh viên)</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Full Name:</div>
          <div>Nguyễn Quỳnh Như</div>
          <div className="font-bold">Student ID:</div>
          <div>HE170000</div>
          <div className="font-bold">Major:</div>
          <div>Software Engineering</div>
          <div className="font-bold">Batch:</div>
          <div>K17</div>
        </div>
      </div>
    )
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white font-sans flex flex-col max-w-md mx-auto shadow-2xl border-x border-gray-100 overflow-x-hidden">
        {/* Header Section */}
        <div className="p-4 pt-8">
          <h1 className="text-4xl font-bold text-[#444] leading-tight mb-4">
            FPT University<br />
            Academic Portal
          </h1>

          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-gray-600 font-medium">
                FAP mobile app (myFAP) is ready at
              </p>
              <div className="flex gap-2">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-8"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-8"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <p className="text-[11px] text-gray-600 mb-1">Hỗ trợ kỹ thuật FAP</p>
              <div className="border border-gray-200 p-1">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://fap.fpt.edu.vn" 
                  alt="QR Code" 
                  className="w-24 h-24"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Login Sections */}
        <div className="px-4 space-y-8 mt-4">
          {/* Parent Section */}
          <div className="border border-gray-200 rounded-sm">
            <div className="bg-[#f0ad4e] text-white px-2 py-1 text-sm font-bold inline-block -mt-3 ml-2">
              Phụ huynh
            </div>
            <div className="p-8 flex justify-center">
              <button className="bg-[#337ab7] text-white px-6 py-2 rounded-md font-medium hover:bg-[#286090] transition-colors">
                Đăng nhập
              </button>
            </div>
          </div>

          {/* Student/Staff Section */}
          <div className="border border-gray-200 rounded-sm">
            <div className="bg-[#f0ad4e] text-white px-2 py-1 text-sm font-bold inline-block -mt-3 ml-2">
              Sinh viên, Giảng viên, Cán bộ ĐH-FPT
            </div>
            <div className="p-6 space-y-4">
              <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                <div className="bg-[#f8f8f8] px-3 py-2 text-sm text-gray-600 border-r border-gray-300 flex items-center">
                  Select Campus
                </div>
                <select 
                  className="flex-1 p-2 text-sm outline-none bg-white"
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                >
                  <option>--Chọn--</option>
                  <option>FU-Hòa Lạc</option>
                  <option>FU-Hồ Chí Minh</option>
                  <option>FU-Đà Nẵng</option>
                  <option>FU-Cần Thơ</option>
                  <option>FU-Quy Nhơn</option>
                </select>
              </div>

              <button 
                onClick={() => {
                  if (campus !== '--Chọn--') {
                    setIsLoggedIn(true);
                  } else {
                    alert('Vui lòng chọn cơ sở đào tạo!');
                  }
                }}
                className="w-full bg-[#d9534f] text-white p-2 rounded-sm flex items-center justify-center gap-2 hover:bg-[#c9302c] transition-colors font-bold text-sm"
              >
                <span className="text-lg">G+</span> Login With Google
              </button>

              <div className="text-center">
                <p className="text-[11px] text-gray-800 font-bold underline cursor-pointer">
                  Với sinh viên từ K19 đăng nhập với FEID
                </p>
              </div>

              <button className="w-full bg-[#337ab7] text-white p-2 rounded-sm flex items-center justify-center gap-2 hover:bg-[#286090] transition-colors font-bold text-sm">
                <LogIn className="w-4 h-4" /> Login With FeID
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto p-8 text-center border-t border-gray-100">
          <p className="text-[11px] text-gray-400">
            © Powered by FPT University | CMS | library | books24x7
          </p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    if (tabContents[currentView]) {
      return (
        <div className="p-6 bg-white min-h-[400px]">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="text-[#337ab7] flex items-center gap-1 text-sm font-bold mb-6 hover:underline"
          >
            <ChevronRight className="rotate-180 w-4 h-4" />
            Quay lại trang chủ
          </button>
          {tabContents[currentView]}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 max-w-md mx-auto border-x border-gray-100 shadow-sm overflow-x-hidden relative">
      {/* Header Section */}
      <div className="p-4 pt-8">
        <h1 className="text-4xl font-bold text-[#444] leading-tight mb-4">
          FPT University<br />
          Academic Portal
        </h1>

        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-gray-600 font-medium">
              FAP mobile app (myFAP) is ready at
            </p>
            <div className="flex gap-2">
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-8"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-8"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-[11px] text-gray-600 mb-1">Hỗ trợ kỹ thuật FAP</p>
            <div className="border border-gray-200 p-1">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://fap.fpt.edu.vn" 
                alt="QR Code" 
                className="w-24 h-24"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Info Bar */}
      <div className="bg-[#5cb85c] text-white px-2 py-1 text-sm inline-block ml-4 rounded-sm">
        <span className="font-medium">quynhnhu1204206@gmail.com</span>
        <span className="mx-2">|</span>
        <button onClick={() => setIsLoggedIn(false)} className="hover:underline">logout</button>
        <span className="mx-2">|</span>
      </div>
      <div className="bg-[#5cb85c] text-white px-2 py-1 text-sm inline-block ml-4 mt-1 rounded-sm">
        <span className="font-medium uppercase">CAMPUS: {campus}</span>
      </div>

      {/* Navigation */}
      <div className="bg-[#f5f5f5] mt-2 p-2 px-4 flex gap-2 text-sm border-y border-gray-200">
        <button onClick={() => setCurrentView('dashboard')} className={`text-[#337ab7] hover:underline ${currentView === 'dashboard' ? 'font-bold' : ''}`}>Home</button>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-[#337ab7] hover:underline">Thông báo</a>
      </div>

      {currentView === 'dashboard' ? (
        <>
          {/* Tuition & Feedback Section */}
          <div className="p-4 space-y-6 border-b border-gray-100">
            <p className="text-sm text-gray-600 italic">Loading chat session...</p>

            <div className="text-center space-y-1">
              <p className="text-[#d9534f] font-bold text-lg">
                Học phí phải nộp: 30,000,000 - Hạn nộp học phí đến ngày 05/04/2026
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-[#d9534f] font-bold text-lg italic">
                Account balance (Số dư tài khoản): <span className="underline">0</span> VNĐ(Số dư chưa đủ để thanh toán các khoản nộp)
              </p>
              
              <div className="text-sm space-y-2 text-gray-800">
                <p>Nếu bạn đã nộp các khoản phí này vui lòng bỏ qua.</p>
                <p>Thông báo này sẽ không hiển thị nữa sau khi hệ thống thực hiện quét trừ tiền các khoản phải thu trước khi học kỳ bắt đầu</p>
              </div>
            </div>

            <div className="text-[#f0ad4e] text-center space-y-2 font-medium leading-relaxed">
              <p className="text-lg">Now is the time to take feedbacks on teachers and subjects which you are learning!</p>
              <p>The feedbacks will help FPT University to have information about teachers and the teaching of teachers. Take all your feebacks before you view the information about learning (such as grade, attendance ...) please! This page will display on your screen, unless you take all your feedbacks.</p>
            </div>
          </div>

          {/* News Section */}
          <div className="mt-4 px-4">
            <div className="bg-[#286090] text-white px-4 py-2 rounded-t-md font-bold text-xl inline-block min-w-[120px] text-center">
              News
            </div>
            <div className="border border-gray-200 rounded-b-md p-4 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="underline text-[#337ab7] cursor-pointer" onClick={() => setCurrentView('news-detail')}>Tin tức</span>
                <button 
                  onClick={() => setCurrentView('news-detail')}
                  className="bg-[#f0ad4e] text-white px-2 py-1 rounded text-xs hover:bg-[#ec971f] transition-colors font-bold"
                >
                  xem tại đây
                </button>
              </div>

              <div className="text-[11px] text-gray-600 italic">
                (Vui lòng nhấn vào "xem tại đây" để xem các thông báo mới nhất từ nhà trường)
              </div>

              <div className="overflow-x-auto">
                <div className="bg-[#008000] text-white p-2 font-bold text-lg border border-[#008000]">
                  IMPORTANT NOTICE
                </div>
                <table className="w-full text-xs border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#337ab7] text-white">
                      <th className="border border-gray-300 p-2 w-1/2">Type of procedure | Loại thủ tục</th>
                      <th className="border border-gray-300 p-2 w-1/2">Deadline | Hạn nộp Đơn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">1. Changing major (Chuyển ngành)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">5 weeks before the new semester <span className="text-black">(5 tuần trước học kỳ mới)</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">2. Changing campus (Chuyển cơ sở)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">3. Rejoin (Nhập học trở lại)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">10 days before the new semester <span className="text-black">(10 ngày trước học kỳ mới)</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">4. Suspend one semester (Bảo lưu học kỳ)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">1 week before the new semester <span className="text-black">(1 tuần trước học kỳ mới)</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">5. Suspend one semester to take repeated course (Tạm ngưng tiến độ 1 học kỳ để học lại)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">6. Suspend subject (Tạm ngừng môn)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">7. Register to repeat a course (Đăng ký học lại)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">8. Register extra courses (Đăng ký học đi chậm kỳ)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">9. Register to improve mark (Đăng ký học cải thiện)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">10. Move out class (Chuyển lớp)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">11. Request a drop out (Thôi học tự nguyện)</td>
                      <td className="border border-gray-300 p-2"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">12. Retake to improve mark (Thi cải thiện)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">12 noon the day before the retakeresit <span className="text-black">(12h trưa trước ngày thi lại)</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">13. Re - Examination (Phúc tra)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">3 days after the examination result public <span className="text-black">(3 ngày sau ngày công bố kết quả)</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">14. Free of attendance (Miễn điểm danh)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">before starting the new semester <span className="text-black">(trước khi học kỳ bắt đầu)</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">15. Pay specialized tuition (Nộp học phí chuyên ngành)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">5 working days before the new semester <span className="text-black">(5 ngày trước học kỳ mới không tính T7, CN)</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">16. Pay preparetation English tuition (Nộp học phí Tiếng Anh dự bị)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">3 working days before the new course <span className="text-black">(3 ngày trước khi bắt đầu khóa học không tính T7, CN)</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">17. Register for final exam for subjects online (Đăng ký thi thẩm định các môn online)</td>
                      <td className="border border-gray-300 p-2 text-[#337ab7]">12 a.m - Friday of the ninth week of the semester <span className="text-black">(12h Thứ 6 tuần thứ 9 của học kỳ)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Academic Section */}
          <div className="mt-8 px-4">
            <div className="bg-[#f0ad4e] text-white px-4 py-2 rounded-t-md font-bold text-xl text-center">
              Academic
            </div>
            <div className="border border-gray-200 rounded-b-md p-4 grid grid-cols-2 gap-x-4 gap-y-8">
              {/* Registration/Application */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Registration/Application (Thủ tục/đơn từ)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Suspend one semester to take repeated course')}>
                    Suspend one semester to take repeated course | Cancel
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Suspend one semester')}>Suspend one semester | Cancel (Xin tạm nghỉ một học kỳ | Hủy bỏ việc xin tạm nghỉ)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Move out class')}>Move out class (Xin chuyển lớp/ Tạm ngưng môn)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Đăng ký học môn học tại nước ngoài')}>Đăng ký học môn học tại nước ngoài</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Register extra courses')}>
                    Register extra courses (Đăng ký môn học đi chậm kỳ)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Register to improve mark')}>Register to improve mark (Đăng ký học cải thiện điểm)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Register to repeat a course')}>Register to repeat a course (Đăng ký học lại)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Cancel registration')}>Cancel registration (Hủy đăng ký học)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Register Free Elective Courses')}>Register Free Elective Courses (Đăng ký môn tự chọn)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Send Application')}>
                    Send Application (Gửi đơn) | View Application (Xem đơn)
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Xin xác nhận sinh viên')}>Xin xác nhận sinh viên</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Choose paid items')}>
                    Choose paid items (Lựa chọn các khoản nộp) - Thanh toán
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Yêu cầu đổi chéo lớp với sinh viên')}>Yêu cầu đổi chéo lớp với sinh viên</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Sinh viên điểm danh bằng mã được cấp')}>Sinh viên điểm danh bằng mã được cấp</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Wishlist Course')}>Wishlist Course (Danh sách các môn học chờ lớp) | Register wishlist (Đăng ký)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Đề nghị hỗ trợ kinh phí khởi nghiệp')}>Đề nghị hỗ trợ kinh phí khởi nghiệp | View</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Đăng ký học vượt kỳ')}>Đăng ký học vượt kỳ</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Đăng ký học phụ đạo')}>Đăng ký học phụ đạo</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Đăng ký bảo hiểm y tế')}>Đăng ký bảo hiểm y tế</li>
                </ul>
              </div>

              {/* Information Access */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Information Access (Tra cứu thông tin)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('University timetable')}>University timetable (Lịch học)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Tuition fee per course')}>Tuition fee per course (Biểu học phí)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Weekly timetable')}>
                    Weekly timetable (Thời khóa biểu từng tuần)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('exams')}>
                    View exam schedule (Xem lịch thi)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View Syllabuses')}>View Syllabuses (Xem đề cương môn học)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('EduNext student guideline')}>
                    EduNext student guideline
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Help/Hỗ trợ')}>
                    Help/Hỗ trợ
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Tài liệu hướng dẫn')}>
                    Tài liệu hướng dẫn: Định hướng cho sinh viên
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Student book room')}>
                    Student book room
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Thông báo kết quả OJT')}>Thông báo kết quả OJT | xét khóa luận tốt nghiệp</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Nâng cấp phần mềm SAFE EXAM BROWSER (SEB)')}>
                    Nâng cấp phần mềm SAFE EXAM BROWSER (SEB)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                </ul>
              </div>

              {/* Feedback */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Feedback (Ý kiến)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Feedback about teaching')}>
                    Feedback about teaching (Ý kiến về việc giảng dạy)
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                </ul>
              </div>

              {/* Reports */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Reports (Báo cáo)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Attendance report')}>
                    Attendance report (Báo cáo điểm danh)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Mark Report')}>
                    Mark Report (Báo cáo điểm)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Academic Transcript')}>Academic Transcript (Báo cáo điểm)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Curriculum')}>
                    Curriculum (Khung chương trình)
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Transaction history')}>
                    Transaction history (Lịch sử giao dịch)
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Others (Khác)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Student Profile')}>Student Profile | Update Profile | Đồng ý cung cấp thông tin cho phụ huynh</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View semester, room')}>View semester, room (Xem thông tin về học kỳ, phòng)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Các loại chứng chỉ')}>Các loại chứng chỉ</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Report điểm phong trào')}>Report điểm phong trào</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('How to access Wiley eBook')}>
                    How to access Wiley eBook on VitalSource platform
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Download EOSClient')}>
                    Download EOSClient
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Change password FEID')}>Change password FEID</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Student book room')}>
                    Student book room
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Campus Transfer')}>Campus Transfer (Chuyển cơ sở)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Major Transfer')}>Major Transfer (Chuyển ngành)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Rejoin')}>Rejoin (Nhập học trở lại)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Suspend')}>Suspend (Bảo lưu)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Drop out')}>Drop out (Thôi học)</li>
                </ul>
              </div>

              {/* Regulations */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Regulations (Các quy định)</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Academic Regulations')}>Academic Regulations (Quy định học tập)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Financial Regulations')}>Financial Regulations (Quy định tài chính)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Student Regulations')}>Student Regulations (Quy định sinh viên)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Other Regulations')}>Other Regulations (Các quy định khác)</li>
                </ul>
              </div>

              {/* Courses on FPTU-Coursera */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Courses on FPTU-Coursera</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View all courses')}>View all courses (Xem tất cả các khóa học)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View my courses')}>View my courses (Xem các khóa học của tôi)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View my certificates')}>
                    View my certificates (Xem chứng chỉ của tôi)
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Sử dụng Coursera trên CHATGPT')}>
                    Sử dụng Coursera trên CHATGPT
                    <span className="bg-red-500 text-white text-[8px] px-1 rounded-full animate-pulse ml-1">NEW</span>
                  </li>
                </ul>
              </div>

              {/* Thông tin KTX */}
              <div className="col-span-1">
                <h3 className="font-bold text-sm text-[#444] mb-2 leading-tight">Thông tin KTX</h3>
                <ul className="text-[11px] space-y-2 list-disc pl-4 text-[#337ab7]">
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View KTX information')}>View KTX information (Xem thông tin KTX)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Register KTX')}>Register KTX (Đăng ký KTX)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('View KTX registration')}>View KTX registration (Xem đăng ký KTX)</li>
                  <li className="cursor-pointer hover:underline" onClick={() => setCurrentView('Dormitory regulations')}>
                    Dormitory regulations (Nội quy KTX)
                    <span className="bg-orange-500 text-white text-[8px] px-1 rounded-full ml-1">HOT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : currentView === 'exams' ? (
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="text-[#337ab7] flex items-center gap-1 text-sm font-bold"
            >
              <ChevronRight className="rotate-180 w-4 h-4" />
              Back
            </button>
            <h1 className="text-lg font-bold text-[#444]">Exam Schedule (Lịch thi)</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[10px] border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#337ab7] text-white">
                  <th className="border border-gray-300 p-1">No</th>
                  <th className="border border-gray-300 p-1">Date</th>
                  <th className="border border-gray-300 p-1">Slot</th>
                  <th className="border border-gray-300 p-1">Room</th>
                  <th className="border border-gray-300 p-1">Subject</th>
                  <th className="border border-gray-300 p-1">Form</th>
                  <th className="border border-gray-300 p-1">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-1 text-center">1</td>
                  <td className="border border-gray-300 p-1">06/04/2026</td>
                  <td className="border border-gray-300 p-1 text-center">2</td>
                  <td className="border border-gray-300 p-1 text-center">AL-L403</td>
                  <td className="border border-gray-300 p-1">SWE302</td>
                  <td className="border border-gray-300 p-1 text-center">EOS</td>
                  <td className="border border-gray-300 p-1 text-center">Final</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-1 text-center">2</td>
                  <td className="border border-gray-300 p-1">08/04/2026</td>
                  <td className="border border-gray-300 p-1 text-center">4</td>
                  <td className="border border-gray-300 p-1 text-center">AL-L201</td>
                  <td className="border border-gray-300 p-1">PRN211</td>
                  <td className="border border-gray-300 p-1 text-center">EOS</td>
                  <td className="border border-gray-300 p-1 text-center">Final</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1 text-center">3</td>
                  <td className="border border-gray-300 p-1">10/04/2026</td>
                  <td className="border border-gray-300 p-1 text-center">1</td>
                  <td className="border border-gray-300 p-1 text-center">AL-L305</td>
                  <td className="border border-gray-300 p-1">EXE201</td>
                  <td className="border border-gray-300 p-1 text-center">Pres</td>
                  <td className="border border-gray-300 p-1 text-center">Final</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-[10px] text-blue-800">
            <p className="font-bold mb-1">Notes:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Students must be present 15 mins before exam starts.</li>
              <li>Bring student ID card for identity verification.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <button 
              onClick={() => {
                if (selectedNews) {
                  setSelectedNews(null);
                } else {
                  setCurrentView('dashboard');
                }
              }}
              className="text-[#337ab7] flex items-center gap-1 text-sm font-bold"
            >
              <ChevronRight className="rotate-180 w-4 h-4" />
              Back
            </button>
            <h1 className="text-lg font-bold text-[#444]">
              {selectedNews ? 'Chi tiết tin tức' : 'Tin tức (News)'}
            </h1>
          </div>

          <div className="space-y-6">
            {selectedNews ? (
              <div className="bg-white border border-gray-200 rounded-md p-6 space-y-4 shadow-sm">
                <h2 className="text-xl font-bold text-[#337ab7] border-b border-gray-100 pb-4">
                  {newsItems.find(n => n.id === selectedNews)?.title}
                </h2>
                <div className="flex justify-between text-[10px] text-gray-400 italic">
                  <span>Ngày đăng: {newsItems.find(n => n.id === selectedNews)?.date}</span>
                  <span>Tác giả: {newsItems.find(n => n.id === selectedNews)?.author}</span>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {newsItems.find(n => n.id === selectedNews)?.content}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {newsItems.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedNews(item.id)}
                    className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm cursor-pointer hover:border-[#337ab7] transition-colors"
                  >
                    <div className="bg-[#f8f8f8] p-3 border-b border-gray-200 flex justify-between items-center">
                      <h2 className="font-bold text-[#337ab7] text-sm truncate pr-4">{item.title}</h2>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">{item.date}</span>
                    </div>
                    <div className="p-3 text-[11px] text-gray-500 line-clamp-2">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 p-4 border-t border-gray-200 text-[11px] text-gray-600 space-y-2">
        <p>
          Mọi góp ý, thắc mắc xin liên hệ: <span className="font-bold">Phòng dịch vụ sinh viên</span>: Email: 
          <a href="mailto:dichvusinhvien@fe.edu.vn" className="text-[#337ab7] ml-1">dichvusinhvien@fe.edu.vn</a>. 
          Điện thoại: <span className="font-bold">(024)7308.13.13</span>
        </p>
        <p className="text-center text-gray-400">
          © Powered by FPT University | CMS | library | books24x7
        </p>
      </div>

    </div>
  );
}
