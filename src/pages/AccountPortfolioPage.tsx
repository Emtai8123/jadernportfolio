import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  Image,
  Linkedin,
  Mail,
  Menu,
  PenTool,
  Phone,
  Presentation,
  Sparkles,
  type LucideIcon,
  Users,
  Wallet,
  X,
} from "lucide-react";
import betterMeImage2 from "../../asset/Port - Hình ảnh/BM - Hình ảnh/BM -  Hình 2.png";
import betterMeImage1 from "../../asset/Port - Hình ảnh/BM - Hình ảnh/BM - Hình 1.jpg";
import betterMeImage3 from "../../asset/Port - Hình ảnh/BM - Hình ảnh/BM - Hình 3.png";
import kotexImage1 from "../../asset/Port - Hình ảnh/Kotex - Hình ảnh/28.jpg";
import kotexImage2 from "../../asset/Port - Hình ảnh/Kotex - Hình ảnh/29.jpg";
import kotexImage3 from "../../asset/Port - Hình ảnh/Kotex - Hình ảnh/30.jpg";
import case3Image1 from "../../asset/Port - Hình ảnh/Case 3 - Hình ảnh/31.jpg";
import case3Image2 from "../../asset/Port - Hình ảnh/Case 3 - Hình ảnh/32.jpg";
import case3Image3 from "../../asset/Port - Hình ảnh/Case 3 - Hình ảnh/33.jpg";
import case4Image1 from "../../asset/Port - Hình ảnh/Case 4 - Hình ảnh/01.jpg";
import case4Image2 from "../../asset/Port - Hình ảnh/Case 4 - Hình ảnh/02.png";
import case4Image3 from "../../asset/Port - Hình ảnh/Case 4 - Hình ảnh/03.png";
import baoThyAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/bao-thy.png";
import huongLyAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/huong-ly.png";
import ngocTrinhAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/ngoc-trinh.png";
import nguyenKimOanhAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/nguyen-kim-oanh.png";
import tunPhamAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/tun-pham.png";
import xoaiOfficialAvatar from "../../asset/Port - Hình ảnh/BM - Hình ảnh/KOL Avatars/xoai-official.png";
import portrait from "../../asset/avatar-et-xanh.jpg";
import canvaLogo from "../../asset/logos/canva.png";
import chatgptLogo from "../../asset/logos/chatgpt.png";
import claudeLogo from "../../asset/logos/claude.png";
import figmaLogo from "../../asset/logos/figma.png";
import googleDocsLogo from "../../asset/logos/google-docs.png";
import googleSheetsLogo from "../../asset/logos/google-sheets.png";
import illustratorLogo from "../../asset/logos/illustrator.png";
import larkLogo from "../../asset/logos/lark.png";
import officeLogo from "../../asset/logos/office.png";
import belloLogo from "../../asset/brand-logos/bello.png";
import clearLogo from "../../asset/brand-logos/clear.png";
import doveLogo from "../../asset/brand-logos/dove.png";
import keyshuLogo from "../../asset/brand-logos/keyshu.png";
import kotexLogo from "../../asset/brand-logos/kotex.png";
import mistineLogo from "../../asset/brand-logos/mistine.png";
import mykellaLogo from "../../asset/brand-logos/mykella.png";
import sachiLogo from "../../asset/brand-logos/sachi.png";
import sohacoLogo from "../../asset/brand-logos/sohaco.png";
import wellkidsLogo from "../../asset/brand-logos/wellkids.png";

type AccountLang = "vi" | "en";

const common = {
  betterMeImages: [betterMeImage1, betterMeImage2, betterMeImage3],
  kotexImages: [kotexImage1, kotexImage2, kotexImage3],
  case3Images: [case3Image1, case3Image2, case3Image3],
  case4Images: [case4Image1, case4Image2, case4Image3],
  betterMeCreators: [
    { name: "Ngọc Trinh", followers: "~7.5M followers", avatar: ngocTrinhAvatar },
    { name: "Bảo Thy Tran", followers: "~743.3K followers", avatar: baoThyAvatar },
    { name: "Hương Ly", followers: "~400.8K followers", avatar: huongLyAvatar },
    { name: "Oanh Buzj", followers: "~260.1K followers", avatar: nguyenKimOanhAvatar },
    { name: "Tun Phạm Official", followers: "~4.9M followers", avatar: tunPhamAvatar },
    { name: "Xoài Official", followers: "~1.9M followers", avatar: xoaiOfficialAvatar },
  ],
  tools: [
    ["Office", officeLogo],
    ["Lark", larkLogo],
    ["Google Sheets", googleSheetsLogo],
    ["Google Docs", googleDocsLogo],
    ["ChatGPT", chatgptLogo],
    ["Claude", claudeLogo],
    ["Canva", canvaLogo],
    ["Figma", figmaLogo],
    ["Illustrator", illustratorLogo],
  ],
  brands: [
    ["Kotex", kotexLogo],
    ["Clear", clearLogo],
    ["Dove", doveLogo],
    ["Mistine", mistineLogo],
    ["Sachi", sachiLogo],
    ["Bello", belloLogo],
    ["Sohaco", sohacoLogo],
    ["WellKids", wellkidsLogo],
    ["Keyshu", keyshuLogo],
    ["myKella", mykellaLogo],
  ],
} as const;

const accountContent = {
  vi: {
    pageTitle: "Nguyễn Tài | Account Specialist Portfolio",
    nav: [
      ["Giới thiệu", "#gioi-thieu"],
      ["Năng lực", "#nang-luc"],
      ["Dự án", "#du-an"],
      ["Liên hệ", "#lien-he"],
    ],
    cvHref: "/output/pdf/Nguyen_Em_Tai_Middle_Account_Executive_Client_Solution_VI.pdf",
    languageButton: "EN",
    hero: {
      eyebrow: "Middle Account Executive Portfolio",
      titlePrefix: "Hiểu bài toán,",
      titleHighlight: "nối giải pháp,",
      titleSuffix: "tạo tăng trưởng.",
      body:
        "Mình là Nguyễn Tài, Account Specialist chuyên kết nối giải pháp E-commerce, Creator Economy và KOL/KOC Booking cho doanh nghiệp. Với tư duy lấy hiệu quả kinh doanh làm trọng tâm, mình không chỉ theo sát tiến độ vận hành mà còn đồng hành cùng thương hiệu biến mọi brief thành kết quả đo lường được.",
      primaryCta: "Xem dự án",
      secondaryCta: "Liên hệ phỏng vấn",
      badge: "Account Specialist / Growth Solution",
      stats: [
        ["2+", "Năm trong Creator Economy"],
        ["100-800", "Video đầu ra mỗi chiến dịch"],
        ["15+", "Cộng đồng KOC đang hỗ trợ setup"],
      ],
    },
    intro: {
      eyebrow: "Giới thiệu",
      title: "Câu chuyện nghề nghiệp",
      paragraphs: [
        "Nền tảng của mình được đúc kết qua nhiều vai trò thực chiến trong môi trường Agency: từ BD/Pitching giải bài toán khách hàng, Account chăm sóc & quản trị kỳ vọng Client, Full-stack Operation (vận hành E-commerce, KOC/KOL Booking, tối ưu Ads) cho đến Truyền thông sự kiện. Việc đứng ở nhiều góc độ giúp mình thấu hiểu trọn vẹn luồng dự án, từ đó định vị bản thân theo mảng Client Solutions - tập trung tư vấn chiến lược và biến mọi Brief thành kết quả đo lường được.",
        "Sở trường của mình là khả năng chủ động giải quyết vấn đề, linh hoạt thích ứng và bám sát mục tiêu dự án. Mình liên tục chuẩn hóa quy trình và tư duy quản trị để chinh phục các cột mốc chuyên môn cao hơn.",
      ],
      proof: [
        ["Hiện tại", "Account Executive: Thực chiến vận hành campaign, KOC/KOL Booking và giải pháp Client."],
        ["6-8 tháng", "Senior Account Executive: Tối ưu tư duy chiến lược và quản trị bài toán lớn."],
        ["2 năm tới", "Account Manager: Bứt phá với năng lực quản lý Account, Performance và Creator Community."],
      ],
    },
    tools: {
      eyebrow: "Công cụ làm việc",
      title: "Công cụ làm việc",
    },
    contribution: {
      eyebrow: "HOW WE WORK TOGETHER",
      title: "Quy trình triển khai & Đồng hành cùng dự án",
      body:
        "Linh hoạt đảm nhận các vai trò theo nhu cầu của thương hiệu - đảm bảo dự án chạy đúng nhịp, đúng ngân sách và đạt mục tiêu tăng trưởng.",
      groups: [
        {
          stage: "01",
          title: "Làm rõ & Định hình",
          summary: "Làm rõ bài toán và biến brief thành scope có thể chạy.",
          items: [
            { icon: Handshake, title: "Client Handling", body: "Nhận brief, làm rõ mục tiêu, cập nhật tiến độ và giữ kỳ vọng khách hàng." },
            { icon: PenTool, title: "Proposal Support", body: "Research, idea, proposal deck, quotation, scope, timeline và execution plan." },
          ],
        },
        {
          stage: "02",
          title: "Vận hành & Thực thi",
          summary: "Giữ nhịp vận hành, timeline, ngân sách và các điểm nghẽn.",
          items: [
            { icon: ClipboardList, title: "Project Operation", body: "Điều phối strategy, timeline, nhân sự, KOL/KOC, vendor, nghiệm thu và thanh toán." },
            { icon: BarChart3, title: "Budget & P&L", body: "Theo dõi báo giá, chi phí booking, đối soát và biên lợi nhuận agency." },
          ],
        },
        {
          stage: "03",
          title: "Tối ưu & Mở rộng",
          summary: "Mở rộng creator, cộng đồng và năng lực vận hành của team.",
          items: [
            { icon: Sparkles, title: "KOL/KOC & UGC Booking", body: "Plan booking, tìm creator, báo giá, gửi brief, duyệt content, tracking và báo cáo." },
            { icon: Users, title: "Community & Team Support", body: "Setup cộng đồng KOC, training intern/trainee/junior và chuẩn hóa workflow." },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Kinh nghiệm",
      title: "Câu chuyện kinh nghiệm theo từng giai đoạn",
      timeline: [
        {
          period: "03/2025 - Hiện tại",
          company: "SIA Innovation Marketing Agency / SIA Hub",
          role: "Account Executive - Client Solution & Campaign Operation",
          detail: "Lead hoặc vice lead trong các chiến dịch KOC/KOL, affiliate và social commerce; làm cầu nối giữa khách hàng, AM, nhà sáng tạo và team vận hành.",
        },
        {
          period: "03/2025 - Hiện tại",
          company: "SIA Innovation Marketing Agency",
          role: "Hỗ trợ phát triển kinh doanh & vận hành đội nhóm",
          detail: "Tham gia xây dựng gói dịch vụ, tài liệu đề xuất, báo giá, tiếp cận khách hàng, follow-up sau pitching và chuẩn hóa cách team triển khai.",
        },
        {
          period: "06/2024 - 02/2025",
          company: "SIA Innovation Marketing Agency / SIA Hub",
          role: "Account vận hành thương mại điện tử",
          detail: "Vận hành thương mại cho TikTok Shop, Shopee, livestream, hỗ trợ quảng cáo trên sàn và phối hợp booking KOC/KOL.",
        },
        {
          period: "06/2022 - 11/2022",
          company: "Hitta JSC / HPLIFT Elevator / OCOP Sóc Trăng",
          role: "Thực tập sinh thương mại điện tử - Digital Marketing",
          detail: "Xây nền tảng về website, SEO, sàn thương mại điện tử, nội dung sản phẩm và hình ảnh bán hàng trong giai đoạn đầu sự nghiệp.",
        },
      ],
    },
    fit: {
      eyebrow: "Vì sao phù hợp",
      title: "Không chỉ làm task, mà giữ nhịp để dự án đi tiếp",
      body:
        "Với Tài, Account không chỉ là người nhận việc và chuyển việc. Account cần hiểu khách hàng đang cần gì, team đang vướng ở đâu và dự án cần được kéo bằng nhịp nào để không rơi khỏi timeline, ngân sách hoặc mục tiêu ban đầu.",
      points: [
        "Thích nghi nhanh khi scope thay đổi hoặc dự án cần triển khai gấp.",
        "Theo sát dự án đến khi có kết quả, không chỉ dừng ở việc gửi task.",
        "Tự học công cụ và quy trình mới để xử lý bài toán vận hành thực tế.",
        "Giao tiếp với khách hàng bằng tinh thần rõ ràng, chân thành và có trách nhiệm.",
      ],
    },
    projects: {
      eyebrow: "Dự án tiêu biểu",
      title: "Giải bài toán thương hiệu qua các chiến dịch",
      downloadCv: "Tải CV",
      labels: { context: "Bối cảnh", role: "Vai trò", action: "Cách triển khai", image: "Ảnh" },
      items: [
        {
          label: "Case 01",
          title: "Better Me — KOC/KOL Activation & E-Commerce Growth",
          roleTitle: "Vai trò: Account & Operation Lead",
          context: "Better Me là thương hiệu dược mỹ phẩm có vị thế vững chắc ở kênh B2B (bệnh viện/nhà thuốc) nhưng gặp thách thức khi mở rộng sang Social Commerce. Bài toán đặt ra là vừa xây dựng nhận diện thương hiệu (Branding), vừa kích hoạt doanh số tức thì (Performance) cho 2 dòng sản phẩm chủ lực: Dầu gội trị gàu và Dầu gội thảo dược.",
          role: [
            "Đảm nhận vai trò End-to-End Campaign Lead, chịu trách nhiệm toàn bộ vòng đời chiến dịch từ tư vấn giải pháp, quản trị vận hành đến đo lường ROI.",
            "Client Solutions & Alignment: Trực tiếp tư vấn giải pháp, quản trị kỳ vọng khách hàng và duy trì luồng báo cáo minh bạch.",
            "Livestream & Channel Operation: Đứng ra điều phối toàn bộ hệ thống Livestream/Video in-house, tối ưu lịch sóng và kịch bản chuyển đổi.",
            "KOL/KOC Network & UGC: Xây dựng tiêu chí, đàm phán, brief nội dung và kiểm soát chất lượng cho hàng chục Creator.",
            "Media & Performance Tracking: Phối hợp tối ưu Ads, theo dõi sát sao chỉ số Real-time để điều chỉnh phương án triển khai kịp thời.",
          ],
          actionLabel: "Các KOL/KOC đã làm việc cùng",
          action: "",
          creators: common.betterMeCreators,
          evidenceTitle: "KẾT QUẢ TRIỂN KHAI & HIỆU QUẢ KINH DOANH",
          evidence: [
            "500M+ GMV (Doanh số tạo ra từ chiến dịch)",
            "20M+ Total Reach (Lượt tiếp cận qua Live & Video)",
            "50+ Creators Active (KOL/KOC phủ sóng thương hiệu)",
            "5 KOL Live Add-in & 100 Micro KOCs/tháng (Quy mô booking được duy trì liên tục)",
          ],
          frames: ["Danh sách KOC/KOL", "Timeline triển khai", "Báo cáo đã làm sạch"],
        },
        {
          label: "Case 02 / Creator Economy & Affiliate",
          title: "Kotex — Massive KOC Hub & Social Commerce Scaling",
          roleTitle: "Vai trò: Account & Operation Lead (Mass-scale Community Management)",
          context: "Kotex cần xây dựng và quy hoạch một cộng đồng KOC review chuyên sâu trên toàn quốc. Mục tiêu trọng tâm là biến cộng đồng này thành kênh đóng góp doanh số trực tiếp thông qua mô hình Affiliate, phủ sóng Video Review và kích hoạt hệ thống Livestream bán hàng liên tục.",
          role: [
            "Với vai trò Account & Operation Lead, trực tiếp thiết lập quy trình, quản trị đội ngũ và điều phối toàn bộ chuỗi vận hành quy mô lớn (Mass Scale).",
            "Community System & Workflow: Thiết lập quy trình vận hành KOC Hub (onboarding, brief, tracking & thanh toán), xây dựng cơ chế thưởng/vinh danh (Leaderboard/Đấu trường KOC) để duy trì động lực cho Creator.",
            "KOC Community Operation: Trực tiếp quản lý và giữ nhịp kết nối với hệ thống 800+ KOC, điều phối đội ngũ team nhà (Intern/Junior/Mod) để hỗ trợ Creator 24/7.",
            "Event & Workshop Activation: Lên kịch bản và phối hợp tổ chức các buổi Workshop/Offline gathering để đào tạo kỹ năng sáng tạo nội dung, nâng cao gắn kết giữa Kotex và KOC.",
            "Affiliate & Live Tracking: Phối hợp theo dõi chỉ số GMV, duyệt chất lượng Video/Live, quản lý rủi ro truyền thông và tổng hợp báo cáo hiệu suất kinh doanh cho Brand.",
          ],
          action: "",
          evidenceTitle: "KẾT QUẢ CỘNG ĐỒNG & SOCIAL COMMERCE",
          evidence: [
            "800+ Creators: Cộng đồng KOC Active được xây dựng & quy hoạch trên toàn quốc.",
            "2,000+ Video Affiliate: Nội dung phủ sóng thương hiệu được triển khai qua KOC Hub.",
            "200+ Phiên Live: Hoạt động Livestream bán hàng bứt phá doanh số (trong 01 tháng).",
            "10,000+ Interactions: Tương tác thực tế từ chuỗi Content, Minigame nhóm và Offline Workshop.",
          ],
          frames: ["Cộng đồng KOC", "Workshop offline", "Affiliate & live activation"],
        },
        {
          label: "Case 03 / Multi-Brand Affiliate Execution",
          title: "Multi-Brand Video Affiliate Sprint (Clear, Dove, myKella)",
          roleTitle: "Role: BD & Operations Framework Lead",
          context: "Các thương hiệu thuộc ngành Beauty & Personal Care (Clear, Dove, myKella) cần tạo làn sóng phủ rộng trên sàn thương mại điện tử bằng chiến dịch Video Affiliate tốc độ cao (Sprint). Thách thức lớn nhất là thiết lập một bộ máy vận hành có khả năng mở rộng (Scale-up) nhanh chóng: vừa tuyển chọn được lượng lớn KOC chất lượng trong thời gian ngắn, vừa đào tạo đội ngũ triển khai nắm chuẩn quy trình kiểm soát nội dung đồng bộ trên hàng nghìn video.",
          role: [
            "Trực tiếp đóng vai trò BD & Operations Framework Lead, chịu trách nhiệm kết nối dự án, đóng gói bài toán vận hành và trang bị năng lực thực thi cho đội ngũ.",
            "Business Development & Brand Acquisition: Trực tiếp kết nối các Thương hiệu (Clear, Dove, myKella), tư vấn bài toán Affiliate và mang gói dự án về cho Agency.",
            "Framework & SOP Standardization: Đóng gói toàn bộ khung vận hành chuẩn (SOP) từ khâu lọc Profile, gửi sample, duyệt content 2 lớp đến tracking đơn hàng; thiết lập bộ công cụ/dashboard theo dõi dữ liệu realtime cho team.",
            "Team Recruitment & Training: Tuyển dụng, trực tiếp đào tạo (training) nhân sự Account Lead và team vận hành về tư duy chọn KOC, cách làm việc với Brand và quy trình xử lý rủi ro hiện trường.",
            "Ecosystem Connection & Handover: Kết nối mạng lưới KOC Affiliate sẵn có từ hệ sinh thái VietCreator Hub, chuyển giao bộ máy và cố vấn chuyên môn để team tự tin đứng ra vận hành chiến dịch trơn tru.",
          ],
          action: "",
          evidenceTitle: "KẾT QUẢ VẬN HÀNH DỰ ÁN",
          evidence: [
            "750+ Active KOCs: Hệ thống Creator tham gia chiến dịch đồng thời cho cả 3 thương hiệu (Clear: 400+, Dove: 250+, myKella: 100+).",
            "3,700+ Videos Uploaded: Tổng lượng Video Affiliate phủ sóng thị trường (Clear: 2.500+, Dove: 1.000+, myKella: 200+).",
            "10M+ Total Views: Tổng lượt tiếp cận tạo ra qua chuỗi Video Review (Clear: 5M+, Dove: 3M+, myKella: 2M+).",
            "2,000+ Generated Orders: Số lượng đơn hàng trực tiếp kích hoạt qua mạng lưới Affiliate.",
          ],
          frames: ["Multi-brand creator system", "Video affiliate tracker", "Performance dashboard"],
        },
        {
          label: "Case 04 / Creator Ecosystem & Community",
          title: "VietCreator Hub — Xây dựng & Phát triển Cộng đồng 15.000+ KOC Affiliate",
          roleTitle: "Vai trò: Co-Developer & Community Operations Lead",
          context: "Thị trường Creator Economy phát triển nhanh nhưng gặp tình trạng manh mún: KOC thiếu định hướng làm nghề chuyên nghiệp, chưa hiểu luật quảng cáo/hợp đồng, trong khi các Thương hiệu lại loay hoay tìm kiếm mạng lưới Creator uy tín và hoạt động hiệu quả. VietCreator Hub ra đời với sứ mệnh cầu nối, xây dựng môi trường phát triển bền vững cho Creator và tạo dựng hệ sinh thái KOC Affiliate chất lượng cao cho Brand.",
          role: [
            "Với vai trò Co-Developer & Community Operations Lead, trực tiếp tham gia xây dựng nền móng, vận hành hệ thống và kết nối giá trị giữa Brand - Creator - Platform.",
            "Community Strategy & Setup: Đồng phát triển định hướng cộng đồng; chuẩn hóa bộ quy tắc ứng xử, quy trình hỗ trợ Creator làm nghề chuyên nghiệp (xây dựng portfolio, định giá kênh, hiểu luật quảng cáo & hợp đồng).",
            "Event & Workshop Activation: Lên kế hoạch và điều phối tổ chức chuỗi sự kiện đại hội (VietCreator Connect), các buổi Offline Workshop hàng tháng giúp KOC nâng cao kỹ năng sáng tạo nội dung và tư duy Affiliate.",
            "Brand Partnership & Matching: Trực tiếp đóng vai trò cầu nối, mang các dự án/campaign booking & affiliate từ Thương hiệu về cho cộng đồng; quy hoạch tệp KOC chất lượng theo từng ngạch sản phẩm.",
            "Community Growth & Retention: Vận hành hệ thống quản trị nhóm, duy trì luồng thảo luận/chia sẻ kiến thức hàng ngày, tạo môi trường tương tác lành mạnh và giữ chân thành viên dài hạn.",
          ],
          action: "",
          evidenceTitle: "KẾT QUẢ & DẤU ẤN CỘNG ĐỒNG",
          evidence: [
            "15,000+ KOC Affiliates: Thành viên KOC/Creator chuyên nghiệp tham gia hoạt động liên tục trong hệ sinh thái.",
            "Monthly Workshops & Events: Chuỗi sự kiện kết nối & đào tạo kỹ năng chuyên môn được tổ chức định kỳ.",
            "100+ Brand Campaigns: Các dự án hợp tác, booking và chiến dịch review được kết nối thành công tới KOC.",
            "VietCreator Connect 2026: Sự kiện quy tụ hàng trăm Creator đỉnh cao và đại diện các Thương hiệu lớn.",
          ],
          frames: ["Community hub", "Workshop & event", "Brand matching"],
        },
      ],
    },
    proof: {
      eyebrow: "DẤU ẤN NĂNG LỰC",
      title: "Thương hiệu đồng hành & Chỉ số thực chiến",
      results: [
        ["01 / Strategic Solutions", "15+ Proposals & Ngân sách 50M - 500M+ VNĐ. Trực tiếp nghiên cứu, lập phương án chiến lược (Strategic Proposals) và quản trị ngân sách P&L cho các thương hiệu lớn."],
        ["02 / Mass Operation & Team Leadership", "Build & Lead Team vận hành 3.000+ Videos, 200+ Lives & 32M+ Reach. Xây dựng bộ máy, đóng gói quy trình (SOP) và dẫn dắt đội ngũ vận hành tạo ra hơn 3.000 Video Affiliate, 200+ phiên Livestream và 32M+ lượt tiếp cận."],
        ["03 / Creator Ecosystem", "Co-developer Cộng đồng 15.000+ KOC Affiliate. Đặt nền móng phát triển hệ sinh thái VietCreator Hub, quy hoạch tệp Creator chất lượng để sẵn sàng kích hoạt cho mọi chiến dịch."],
      ],
    },
    gallery: {
      title: "Những khoảnh khắc đứng sau mỗi chiến dịch",
      items: ["Workshop & Community", "Campaign Operation", "Team Collaboration", "Behind the Delivery", "Creator Moments", "SIA Culture"],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Cùng kết nối và tạo nên bứt phá",
      body: "Cảm ơn quý anh/chị đã dành thời gian xem portfolio. Nếu góc nhìn và năng lực thực thi của Tài phù hợp với dự án quý công ty đang triển khai, đừng ngần ngại liên hệ để chúng ta cùng thảo luận sâu hơn.",
      checklist: ["Email: nguyenemtai8123@gmail.com", "Call: 0877968821", "LinkedIn: linkedin.com/in/jadern-nguyen"],
      cta: "Gửi email để kết nối",
    },
  },
  en: {
    pageTitle: "Nguyen Tai | Account Specialist Portfolio",
    nav: [
      ["About", "#gioi-thieu"],
      ["Capability", "#nang-luc"],
      ["Projects", "#du-an"],
      ["Contact", "#lien-he"],
    ],
    cvHref: "/output/pdf/Nguyen_Em_Tai_Middle_Account_Executive_Client_Solution_EN.pdf",
    languageButton: "VI",
    hero: {
      eyebrow: "Middle Account Executive Portfolio",
      titlePrefix: "Understand the challenge,",
      titleHighlight: "connect the solution,",
      titleSuffix: "create growth.",
      body:
        "I am Nguyen Tai, an Account Specialist focused on connecting E-commerce, Creator Economy and KOC Booking solutions for businesses. With business effectiveness at the center, I not only keep operations on track but also work with brands to turn every brief into measurable outcomes.",
      primaryCta: "View projects",
      secondaryCta: "Interview contact",
      badge: "Account Specialist / Growth Solution",
      stats: [
        ["2+", "Years in the Creator Economy"],
        ["100-800", "videos delivered per campaign"],
        ["15+", "KOC communities supported"],
      ],
    },
    intro: {
      eyebrow: "About",
      title: "A grounded career story",
      paragraphs: [
        "Through multiple roles in an agency environment across E-commerce, KOC/KOL Booking, Pitching and Events, I have learned how to connect client expectations with a team's ability to execute. This understanding is the foundation for how I position myself in Client Solutions: advising business challenges and turning strategy into practical outcomes.",
        "My strengths are proactive problem-solving, flexible adaptation and staying close to project goals. I continuously standardize workflows and strengthen management thinking to reach higher professional milestones.",
      ],
      proof: [
        ["Now", "Account Executive: Hands-on campaign operations, KOC/KOL Booking and client solutions."],
        ["6-8 months", "Senior Account Executive: Sharpen strategic thinking and manage larger business challenges."],
        ["2-year goal", "Account Manager: Grow stronger in account management, performance and creator community development."],
      ],
    },
    tools: {
      eyebrow: "Working tools",
      title: "Working tools",
    },
    contribution: {
      eyebrow: "HOW WE WORK TOGETHER",
      title: "Project Execution & Partnership Workflow",
      body: "Flexibly taking on roles based on each brand's needs - keeping projects on rhythm, on budget and aligned with growth goals.",
      groups: [
        {
          stage: "01",
          title: "Clarify & Shape",
          summary: "Clarify the problem and turn a brief into an executable scope.",
          items: [
            { icon: Handshake, title: "Client Handling", body: "Receive briefs, clarify objectives, update progress and manage client expectations." },
            { icon: PenTool, title: "Proposal Support", body: "Support research, ideas, proposal decks, quotation, scope, timeline and execution plans." },
          ],
        },
        {
          stage: "02",
          title: "Operate & Execute",
          summary: "Keep operations, timelines, budgets and bottlenecks under control.",
          items: [
            { icon: ClipboardList, title: "Project Operation", body: "Coordinate strategy, timeline, people, KOL/KOC, vendors, acceptance and payment flows." },
            { icon: BarChart3, title: "Budget & P&L", body: "Track quotations, booking costs, reconciliation and agency margin at project level." },
          ],
        },
        {
          stage: "03",
          title: "Optimize & Scale",
          summary: "Expand creator operations, communities and the team's operating capacity.",
          items: [
            { icon: Sparkles, title: "KOL/KOC & UGC Booking", body: "Plan booking, source creators, quote fees, brief content, review delivery, track and report." },
            { icon: Users, title: "Community & Team Support", body: "Support KOC community setup, train interns/trainees/juniors and standardize workflows." },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience journey by stage",
      timeline: [
        {
          period: "03/2025 - Present",
          company: "SIA Innovation Marketing Agency / SIA Hub",
          role: "Account Executive - Client Solution & Campaign Operation",
          detail: "Lead or vice lead KOC/KOL, affiliate and social commerce campaigns; connect clients, AMs, creators and internal operation teams.",
        },
        {
          period: "03/2025 - Present",
          company: "SIA Innovation Marketing Agency",
          role: "Business development & team operation support",
          detail: "Support service packaging, proposal materials, quotations, client outreach, post-pitch follow-up and team execution standards.",
        },
        {
          period: "06/2024 - 02/2025",
          company: "SIA Innovation Marketing Agency / SIA Hub",
          role: "E-commerce Operation Account",
          detail: "Operate TikTok Shop, Shopee, livestream, marketplace ad support and KOC/KOL booking coordination.",
        },
        {
          period: "06/2022 - 11/2022",
          company: "Hitta JSC / HPLIFT Elevator / OCOP Soc Trang",
          role: "E-commerce & Digital Marketing Intern",
          detail: "Built early foundations in website updates, SEO, e-commerce marketplaces, product content and sales visuals.",
        },
      ],
    },
    fit: {
      eyebrow: "Why fit",
      title: "Not just task handling, but keeping projects moving",
      body:
        "For Tai, Account work is not only receiving and passing tasks along. An Account needs to understand what the client needs, where the team is blocked and what rhythm the project needs so it does not fall away from the timeline, budget or original objective.",
      points: [
        "Adapt quickly when scope changes or a project needs urgent execution.",
        "Follow projects through to outcomes, not just task handoff.",
        "Self-learn tools and workflows to solve real operational problems.",
        "Communicate with clients in a clear, sincere and responsible way.",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Solving brand challenges through campaign execution",
      downloadCv: "Download CV",
      labels: { context: "Context", role: "Role", action: "Execution", image: "Image" },
      items: [
        {
          label: "Case 01",
          title: "Better Me — KOC/KOL Activation & E-Commerce Growth",
          roleTitle: "Role: Account & Operation Lead",
          context: "Better Me is a pharmaceutical cosmetics brand with a strong B2B position across hospitals and pharmacies, but faced the challenge of expanding into Social Commerce. The business objective was to build brand recognition while activating immediate sales performance for two core product lines: anti-dandruff shampoo and herbal shampoo.",
          role: [
            "Owned the role of End-to-End Campaign Lead, responsible for the full campaign lifecycle from solution consulting and operation management to ROI measurement.",
            "Client Solutions & Alignment: Directly advised on solutions, managed client expectations and maintained transparent reporting flows.",
            "Livestream & Channel Operation: Coordinated the full Livestream/Video in-house system, optimizing schedules and conversion scripts.",
            "KOL/KOC Network & UGC: Built selection criteria, negotiated, briefed content and controlled quality across dozens of creators.",
            "Media & Performance Tracking: Coordinated ads optimization and monitored real-time metrics to adjust execution promptly.",
          ],
          actionLabel: "KOLs/KOCs collaborated with",
          action: "",
          creators: common.betterMeCreators,
          evidenceTitle: "EXECUTION RESULTS & BUSINESS IMPACT",
          evidence: [
            "500M+ GMV (Revenue generated from the campaign)",
            "20M+ Total Reach (Reach across Live & Video)",
            "50+ Creators Active (KOL/KOC brand coverage)",
            "5 KOL Live Add-ins & 100 Micro KOCs/month (Sustained booking scale)",
          ],
          frames: ["KOC/KOL list", "Execution timeline", "Cleaned report"],
        },
        {
          label: "Case 02 / Creator Economy & Affiliate",
          title: "Kotex — Massive KOC Hub & Social Commerce Scaling",
          roleTitle: "Role: Account & Operation Lead (Mass-scale Community Management)",
          context: "Kotex needed to build and structure a specialized nationwide KOC review community. The core objective was to turn this community into a direct revenue-contributing channel through affiliate mechanics, wide Video Review coverage and a continuously active livestream commerce system.",
          role: [
            "As Account & Operation Lead, I directly set up workflows, managed the team and coordinated the full mass-scale operation chain.",
            "Community System & Workflow: Set up the KOC Hub operation process across onboarding, briefing, tracking and payment; built reward and recognition mechanics such as leaderboard/KOC challenges to keep creator motivation high.",
            "KOC Community Operation: Directly managed and maintained engagement with 800+ KOCs, coordinating internal interns, juniors and moderators to support creators around the clock.",
            "Event & Workshop Activation: Planned scripts and coordinated offline workshop/gathering sessions to train content creation skills and deepen engagement between Kotex and KOCs.",
            "Affiliate & Live Tracking: Coordinated GMV tracking, reviewed Video/Live quality, managed communication risks and consolidated business performance reports for the brand.",
          ],
          action: "",
          evidenceTitle: "COMMUNITY & SOCIAL COMMERCE RESULTS",
          evidence: [
            "800+ Creators: Active KOC community built and structured nationwide.",
            "2,000+ Affiliate Videos: Brand coverage content activated through the KOC Hub.",
            "200+ Live Sessions: Livestream commerce activities driving sales momentum in 01 month.",
            "10,000+ Interactions: Real engagement from content, group minigames and offline workshops.",
          ],
          frames: ["KOC community", "Offline workshop", "Affiliate & live activation"],
        },
        {
          label: "Case 03 / Multi-Brand Affiliate Execution",
          title: "Multi-Brand Video Affiliate Sprint (Clear, Dove, myKella)",
          roleTitle: "Role: Campaign Setup & Affiliate Operations Lead",
          context: "Beauty & Personal Care brands including Clear, Dove and myKella needed to create broad e-commerce marketplace coverage through a high-speed Video Affiliate sprint. The biggest challenge was recruiting a large volume of quality KOCs in a short time, standardizing product messaging and controlling content quality consistently across thousands of videos.",
          role: [
            "As Setup & Affiliate Operations Lead, I directly established the operating framework and standardized the process for simultaneous execution across multiple brands.",
            "Operation Setup & System Standard: Set up SOPs from profile filtering, sample delivery and content approval to order tracking; built specialized KOC selection criteria for each product line including hair care, skincare and makeup.",
            "KOC Sourcing & Engagement: Coordinated recruitment and activation of thousands of active KOCs; improved video return rates through reward mechanics tied to view milestones and GMV/orders.",
            "Quality & Content Control: Set up a two-layer content review mechanism to ensure videos matched product messaging, brand image and TikTok/e-commerce platform policies.",
            "Data Tracking & Reporting: Monitored real-time dashboard metrics, measured conversion and reach, and consolidated detailed performance reports for each brand (Clear, Dove, myKella).",
          ],
          action: "",
          evidenceTitle: "PROJECT OPERATION RESULTS",
          evidence: [
            "750+ Active KOCs: Creator system activated simultaneously across 3 brands (Clear: 400+, Dove: 250+, myKella: 100+).",
            "3,700+ Videos Uploaded: Total Video Affiliate market coverage (Clear: 2500+, Dove: 1000+, myKella: 200+).",
            "10M+ Total Views: Total reach generated through Video Review content (Clear: 5M+, Dove: 3M+, myKella: 2M+).",
            "2,000+ Generated Orders: Direct orders activated through the Affiliate network.",
          ],
          frames: ["Multi-brand creator system", "Video affiliate tracker", "Performance dashboard"],
        },
        {
          label: "Case 04 / Creator Ecosystem & Community",
          title: "VietCreator Hub — Building & Growing a 15,000+ KOC Affiliate Community",
          roleTitle: "Role: Co-Developer & Community Operations Lead",
          context: "The Creator Economy was growing quickly but remained fragmented: KOCs lacked professional direction and understanding of advertising or contract rules, while brands struggled to find trusted and effective creator networks. VietCreator Hub was built as a bridge, creating a sustainable development environment for creators and a high-quality KOC Affiliate ecosystem for brands.",
          role: [
            "As Co-Developer & Community Operations Lead, I directly helped build the foundation, operate the system and connect value across Brand - Creator - Platform.",
            "Community Strategy & Setup: Co-developed the community direction; standardized conduct rules and creator support workflows for professional development, including portfolio building, channel pricing and advertising/contract understanding.",
            "Event & Workshop Activation: Planned and coordinated flagship community events such as VietCreator Connect and monthly offline workshops to improve content creation skills and affiliate mindset.",
            "Brand Partnership & Matching: Acted as a bridge to bring booking and affiliate campaigns from brands into the community; structured quality KOC pools by product category.",
            "Community Growth & Retention: Operated group management systems, maintained daily discussion and knowledge-sharing flows, and built a healthy interaction environment to retain long-term members.",
          ],
          action: "",
          evidenceTitle: "COMMUNITY RESULTS & SIGNATURE IMPACT",
          evidence: [
            "15,000+ KOC Affiliates: Professional KOC/Creator members actively participating across the ecosystem.",
            "Monthly Workshops & Events: Recurring connection and skill-training events organized for the community.",
            "100+ Brand Campaigns: Partnership, booking and review campaigns successfully connected to KOCs.",
            "VietCreator Connect 2026: A flagship event gathering hundreds of top creators and major brand representatives.",
          ],
          frames: ["Community hub", "Workshop & event", "Brand matching"],
        },
      ],
    },
    proof: {
      eyebrow: "TRUSTED BY BRANDS & METRICS",
      title: "Partnered brands & hands-on growth signals",
      results: [
        ["35M – 350M+ VND", "Campaign budgets optimized and monitored with P&L control."],
        ["12 – 15+ Pitching & Proposals", "Projects supported across strategic decks and quotation development."],
        ["3 – 6 Mentees / Juniors", "People trained through standardized operation and reporting workflows."],
      ],
    },
    gallery: {
      title: "The real moments behind each campaign",
      items: ["Workshop & Community", "Campaign Operation", "Team Collaboration", "Behind the Delivery", "Creator Moments", "SIA Culture"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to discuss further in an interview",
      body: "Thank you for reviewing my portfolio. If my profile fits an Account, Client Solution or Creator Economy/Social Commerce direction, I would appreciate the opportunity to speak directly and share more about my execution experience and how I can contribute to the team.",
      checklist: ["Email: nguyenemtai8123@gmail.com", "Call: 0877968821", "LinkedIn: linkedin.com/in/jadern-nguyen"],
      cta: "Send interview invitation email",
    },
  },
} as const;

export default function AccountPortfolioPage() {
  const [lang, setLang] = useState<AccountLang>("vi");
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = accountContent[lang];
  const proofIcons: LucideIcon[] = [Wallet, Presentation, Users];

  useEffect(() => {
    document.title = content.pageTitle;
    document.documentElement.lang = lang;
  }, [content.pageTitle, lang]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldCompact = window.scrollY > 96;

      setIsHeaderCompact(shouldCompact);
      if (!shouldCompact) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f8ff] text-blue-950">
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <div
          className={`mx-auto flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur transition-all duration-300 ${
            isHeaderCompact
              ? "max-w-3xl border-blue-200 bg-white/98 shadow-2xl shadow-blue-950/15 md:ml-auto md:mr-5 md:w-fit md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none"
              : "max-w-6xl border-blue-100 bg-white/95 shadow-lg shadow-blue-950/10"
          }`}
        >
          <a
            href="#top"
            onClick={() => setIsMenuOpen(false)}
            className={`${isHeaderCompact ? "hidden" : "flex"} items-center gap-3 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white`}
          >
            NET
          </a>
          <nav className={`${isHeaderCompact ? "hidden" : "hidden items-center gap-1 md:flex"}`}>
            {content.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-blue-900/70 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang((current) => (current === "vi" ? "en" : "vi"))}
              className={`${isHeaderCompact ? "hidden" : "inline-flex"} group items-center gap-1 rounded-full border border-blue-200 bg-blue-50 p-1 text-xs font-black text-blue-800 shadow-sm shadow-blue-900/5 transition hover:border-blue-300 hover:bg-blue-100`}
              aria-label={lang === "vi" ? "Switch portfolio language to English" : "Chuyển portfolio sang tiếng Việt"}
            >
              <span
                className={`inline-flex h-8 min-w-14 items-center justify-center gap-1 rounded-full px-2 transition ${
                  lang === "vi" ? "bg-white text-blue-950 shadow-sm" : "text-blue-700/60"
                }`}
                aria-hidden="true"
              >
                <span className="text-base leading-none">🇻🇳</span>
                VI
              </span>
              <span
                className={`inline-flex h-8 min-w-14 items-center justify-center gap-1 rounded-full px-2 transition ${
                  lang === "en" ? "bg-white text-blue-950 shadow-sm" : "text-blue-700/60"
                }`}
                aria-hidden="true"
              >
                <span className="text-base leading-none">🇬🇧</span>
                EN
              </span>
            </button>
            <a
              href={content.cvHref}
              className={`${isHeaderCompact ? "hidden" : "inline-flex"} items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white transition hover:bg-blue-700`}
            >
              <FileText size={15} />
              CV
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={`h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 transition hover:bg-blue-100 ${
                isHeaderCompact
                  ? "inline-flex md:h-12 md:w-12 md:bg-white/95 md:text-blue-800 md:shadow-xl md:shadow-blue-950/10"
                  : "inline-flex md:hidden"
              }`}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        <div
          className={`mx-auto mt-2 grid max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-white/95 shadow-xl shadow-blue-950/10 backdrop-blur transition-all duration-300 ${
            isHeaderCompact ? "md:mx-0 md:ml-auto md:mr-5 md:max-w-[17rem]" : ""
          } ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="grid gap-1 p-3">
            {content.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-blue-900 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden grid-cols-2 gap-2 border-t border-blue-100 p-3 md:grid">
            <button
              type="button"
              onClick={() => {
                setLang((current) => (current === "vi" ? "en" : "vi"));
                setIsMenuOpen(false);
              }}
              className="rounded-2xl border border-blue-100 bg-blue-50 px-3 py-3 text-xs font-black uppercase tracking-[0.12em] text-blue-900 transition hover:bg-blue-100"
            >
              {content.languageButton}
            </button>
            <a
              href={content.cvHref}
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-950 px-3 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-blue-700"
            >
              <FileText size={15} />
              CV
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-white pb-16 pt-28">
        <div className="pointer-events-none absolute right-[-120px] top-16 h-[360px] w-[360px] rounded-full bg-sky-100/70 blur-3xl" />
        <div className="pointer-events-none absolute left-[-160px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.02fr_0.82fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-800">
              <Sparkles size={15} />
              {content.hero.eyebrow}
            </div>

            <h1 className="max-w-3xl text-[44px] font-black leading-[1.02] tracking-[-0.035em] text-blue-950 sm:text-[60px] md:text-[72px]">
              {content.hero.titlePrefix}
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                {content.hero.titleHighlight}
              </span>
              <br />
              {content.hero.titleSuffix}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-900/70 md:text-lg">{content.hero.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#du-an"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.03] active:scale-[0.98]"
              >
                {content.hero.primaryCta}
                <ArrowUpRight size={17} />
              </a>
              <a
                href="#lien-he"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-black text-blue-900 transition hover:border-blue-300 hover:text-blue-700"
              >
                {content.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 sm:gap-7 lg:hidden">
              {content.hero.stats.map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black leading-none text-blue-950 sm:text-3xl">{value}</p>
                  <p className="mt-2 text-xs font-bold leading-5 text-blue-700/60 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="relative rounded-[36px] bg-gradient-to-br from-white via-blue-100 to-sky-200 p-[2px] shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
              <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-white via-blue-50 to-sky-50 p-4">
                <div className="pointer-events-none absolute inset-x-8 top-4 h-28 rounded-full bg-white/80 blur-3xl" />
                <div className="pointer-events-none absolute right-[-90px] top-12 h-64 w-64 rounded-full bg-sky-200/55 blur-3xl" />
                <div className="pointer-events-none absolute bottom-[-90px] left-[-70px] h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />

                <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-sky-50 shadow-inner shadow-white sm:h-[590px] lg:h-[620px]">
                  <img src={portrait} alt="Nguyen Em Tai" className="h-full w-full object-cover object-[50%_24%] contrast-[1.04] saturate-[1.03]" />
                  <div className="pointer-events-none absolute left-[18%] top-[40%] h-[34%] w-[68%] rounded-full bg-white/30 blur-3xl mix-blend-screen" />
                  <div className="pointer-events-none absolute bottom-24 left-[22%] h-24 w-[62%] rounded-full bg-blue-950/24 blur-2xl mix-blend-multiply" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-blue-950/52 via-blue-950/12 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/18 to-transparent" />

                  <div className="absolute left-5 right-5 top-5">
                    <div className="w-full rounded-2xl border border-white/65 bg-white/68 px-4 py-3 shadow-[0_18px_48px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                      <p className="text-[11px] font-black uppercase leading-4 tracking-[0.14em] text-blue-950">{content.hero.badge}</p>
                      <p className="mt-1 text-[11px] font-bold leading-4 text-blue-700/60">E-commerce / Creator Economy / KOL/KOC</p>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/65 bg-white/78 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                      {content.hero.stats.map(([value, label]) => (
                        <div key={label} className="rounded-xl bg-white/48 p-3 ring-1 ring-blue-950/[0.04]">
                          <p className="text-2xl font-black leading-none text-blue-950 sm:text-[28px]">{value}</p>
                          <p className="mt-2 text-[10px] font-bold leading-4 text-blue-700/60">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="scroll-mt-24 bg-[#061a46] py-14 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-start gap-8 border-y border-white/10 py-9 lg:grid-cols-[440px_1fr] lg:gap-14 xl:grid-cols-[460px_1fr]">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">{content.intro.eyebrow}</p>
              <h2 className="mt-3 max-w-[11ch] text-3xl font-black leading-[1.06] tracking-[-0.02em] md:text-[40px]">{content.intro.title}</h2>
              <div className="mt-5 hidden w-fit rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-200 sm:block">
                Client Solutions
              </div>
            </div>

            <div className="grid min-w-0 gap-6">
              <div className="grid gap-4">
                {content.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-4xl text-base leading-8 text-blue-50">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3">
                {content.intro.proof.map(([title, body]) => (
                  <div key={title} className="h-full">
                    <MiniProof title={title} body={body} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={content.tools.title} className="bg-[#eaf3ff] py-8 text-blue-950">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white/45 px-4 py-5 shadow-sm shadow-blue-900/5 md:flex-row md:items-center">
            <div className="shrink-0 md:w-48">
              <p className="text-xs font-black uppercase leading-5 tracking-[0.18em] text-blue-700">
                {content.tools.title}
              </p>
            </div>
            <div className="group relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#eaf3ff] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#eaf3ff] to-transparent" />
              <div className="flex w-max gap-3 animate-marquee-left group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[...common.tools, ...common.tools].map(([name, logo], index) => (
                  <div key={`${name}-${index}`} className="flex h-20 min-w-[124px] flex-col items-center justify-center gap-2 rounded-md border border-blue-100 bg-white px-4 shadow-sm shadow-blue-900/5">
                    <img src={logo} alt={`${name} logo`} className="max-h-9 max-w-[92px] object-contain" />
                    <span className="text-[11px] font-black leading-none text-blue-900">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nang-luc" className="scroll-mt-24 bg-[#f4f8ff] py-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-7">
            <div className="max-w-none">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">{content.contribution.eyebrow}</p>
              <h2 className="mt-4 max-w-none text-[34px] font-black leading-[1.05] tracking-[-0.02em] text-blue-950 sm:text-4xl md:text-[44px] lg:text-[48px]">
                {content.contribution.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-blue-900/70">{content.contribution.body}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {content.contribution.groups.map((group) => (
                <div key={group.title}>
                  <ContributionGroupCard group={group} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061a46] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle eyebrow={content.proof.eyebrow} title={content.proof.title} tone="dark" />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {common.brands.map(([name, logo]) => (
              <div key={name} className="flex h-24 items-center justify-center rounded-md border border-white/10 bg-white p-4">
                <img src={logo} alt={name} className="max-h-12 max-w-[110px] object-contain" />
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {content.proof.results.map(([value, label], index) => (
              <div key={value}>
                <ResultCard value={value} label={label} icon={proofIcons[index]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="du-an" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow={content.projects.eyebrow} title={content.projects.title} />
            <a href={content.cvHref} className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700">
              {content.projects.downloadCv}
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:gap-12">
            {content.projects.items.map((project, index) => (
              <div key={project.title}>
                <ProjectCard
                  project={project}
                  labels={content.projects.labels}
                  index={index}
                  images={index === 0 ? common.betterMeImages : index === 1 ? common.kotexImages : index === 2 ? common.case3Images : index === 3 ? common.case4Images : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lien-he" className="scroll-mt-24 bg-[#061a46] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-[28px] border border-blue-300/25 bg-white p-8 shadow-2xl shadow-blue-950/35 md:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">{content.contact.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.02em] text-blue-950 md:text-5xl">{content.contact.title}</h2>
                <p className="mt-5 text-base leading-7 text-blue-900/70">{content.contact.body}</p>
              </div>
              <div className="grid gap-3">
                {content.contact.checklist.map((item) => {
                  const Icon = item.startsWith("Email:") ? Mail : item.startsWith("Call:") ? Phone : Linkedin;
                  const displayText = item.replace(/^(Email|Call|LinkedIn):\s*/, "");
                  const href = item.startsWith("Email:")
                    ? "mailto:nguyenemtai8123@gmail.com"
                    : item.startsWith("Call:")
                      ? "tel:0877968821"
                      : "https://www.linkedin.com/in/jadern-nguyen";
                  const isExternal = item.startsWith("LinkedIn:");

                  return (
                    <div key={item} className="flex items-center gap-3 rounded-md border border-blue-100 bg-blue-50 p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-500 shadow-sm shadow-blue-900/5">
                        <Icon size={19} />
                      </span>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-sm font-bold text-blue-900 transition hover:text-blue-700"
                      >
                        {displayText}
                      </a>
                    </div>
                  );
                })}
                <a href="mailto:nguyenemtai8123@gmail.com?subject=H%E1%BA%B9n%20ph%E1%BB%8Fng%20v%E1%BA%A5n%20-%20Nguy%E1%BB%85n%20T%C3%A0i&body=Ch%C3%A0o%20T%C3%A0i%2C%0A%0AAnh%2Fch%E1%BB%8B%20%C4%91%C3%A3%20xem%20portfolio%20v%C3%A0%20mu%E1%BB%91n%20h%E1%BA%B9n%20m%E1%BB%99t%20bu%E1%BB%95i%20ph%E1%BB%8Fng%20v%E1%BA%A5n%2Ftrao%20%C4%91%E1%BB%95i%20th%C3%AAm.%0A%0ATh%E1%BB%9Di%20gian%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%3A%0AH%C3%ACnh%20th%E1%BB%A9c%3A%0A%0AC%E1%BA%A3m%20%C6%A1n%2C" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700">
                  <Mail size={17} />
                  {content.contact.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title, align = "left", tone = "light" }: { eyebrow: string; title: string; align?: "left" | "center"; tone?: "light" | "dark" }) {
  const eyebrowClass = tone === "dark" ? "text-xs font-black uppercase tracking-[0.22em] text-blue-300" : "text-xs font-black uppercase tracking-[0.22em] text-blue-700";
  const titleClass = tone === "dark" ? "mt-4 text-4xl font-black tracking-[-0.02em] text-white md:text-5xl" : "mt-4 text-4xl font-black tracking-[-0.02em] text-blue-950 md:text-5xl";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
    </div>
  );
}

function MiniProof({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full min-h-[132px] flex-col rounded-xl border border-blue-200/35 bg-white/[0.12] p-4 shadow-lg shadow-blue-950/20 ring-1 ring-white/10">
      <p className="w-fit rounded-full bg-blue-300/20 px-3 py-1 text-[11px] font-black uppercase leading-4 tracking-[0.08em] text-blue-100">{title}</p>
      <p className="mt-3 text-[12px] font-bold leading-5 text-white">{body}</p>
    </div>
  );
}

type ContributionGroup = (typeof accountContent.vi.contribution.groups)[number];
type ProjectEntry = (typeof accountContent.vi.projects.items)[number];
type ProjectLabels = typeof accountContent.vi.projects.labels;

function ContributionGroupCard({ group }: { group: ContributionGroup }) {
  return (
    <article className="h-full overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm shadow-blue-900/5">
      <div className="border-b border-blue-100 bg-[#061a46] p-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">{group.stage}</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <h3 className="mt-4 text-xl font-black leading-tight">{group.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">{group.summary}</p>
      </div>

      <div className="divide-y divide-blue-100">
        {group.items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-3 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                <Icon size={19} />
              </div>
              <div>
                <p className="text-base font-black leading-tight text-blue-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-900/70">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function ProjectCard({ project, labels, index, images }: { project: ProjectEntry; labels: ProjectLabels; index: number; images?: readonly string[] }) {
  const isReversed = index % 2 === 1;
  const caseNumber = `Case ${String(index + 1).padStart(2, "0")}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-blue-200 bg-[#f8fbff] shadow-xl shadow-blue-950/5">
      <div className="flex flex-col gap-3 border-b border-blue-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-950 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-white">{caseNumber}</span>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">{project.label.replace(/^Case \d+\s*\/\s*/i, "")}</span>
        </div>
        <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-blue-800">
          Key campaign results
        </span>
      </div>
      <div className={`grid grid-cols-1 ${isReversed ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.05fr_1fr]"}`}>
        <div className={`${images ? "bg-[#eaf3ff]" : "bg-[#061a46]"} p-3 sm:p-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          {images ? (
            <div className={`grid h-full gap-3 lg:content-start ${images.length >= 4 ? "md:grid-cols-2" : ""}`}>
              {images.map((src, imageIndex) => {
                const isHeroImage = imageIndex === 0;

                return (
                  <figure
                    key={src}
                    className={
                      isHeroImage
                        ? "overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm shadow-blue-900/5"
                        : "overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm shadow-blue-900/5"
                    }
                  >
                    <img
                      src={src}
                      alt={`${project.title} proof ${imageIndex + 1}`}
                      className={isHeroImage ? "aspect-video h-auto w-full object-cover object-center" : "aspect-video h-auto w-full object-cover object-center"}
                    />
                  </figure>
                );
              })}
            </div>
          ) : (
            <div className="grid h-full min-h-[320px] grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {project.frames.map((frame, index) => (
                <div key={frame} className="flex min-h-32 flex-col items-center justify-center rounded-md border border-dashed border-blue-500/50 bg-[#08245f] p-4 text-center">
                  <Image className="text-blue-300" size={24} />
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.12em] text-blue-200">
                    {labels.image} {index + 1}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-white/70">{frame}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`p-5 sm:p-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">{caseNumber}</p>
          <h3 className="mt-3 text-[28px] font-black leading-tight text-blue-950 md:text-[34px]">{project.title}</h3>
          {"roleTitle" in project && (
            <p className="mt-3 rounded-md bg-blue-100 px-3 py-2 text-xs font-black uppercase leading-5 tracking-[0.1em] text-blue-800">
              {project.roleTitle}
            </p>
          )}
          <div className="mt-5 grid gap-4">
            <Field label={labels.context} value={project.context} />
            <Field label={labels.role} value={project.role} />
            {"creators" in project ? (
              <CreatorStrip label={project.actionLabel} creators={project.creators} />
            ) : (
              project.action && <Field label={labels.action} value={project.action} />
            )}
          </div>
        </div>
      </div>
      <ProjectEvidenceSection project={project} index={index} />
    </article>
  );
}

function ProjectEvidenceSection({ project, index }: { project: ProjectEntry; index: number }) {
  const caseNumber = `Case ${String(index + 1).padStart(2, "0")}`;

  return (
    <section className="border-t-2 border-blue-500 bg-gradient-to-br from-[#061a46] via-[#0b2f78] to-[#eaf3ff] p-4 sm:p-5">
      <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-300">{caseNumber} / Results</p>
          {"evidenceTitle" in project && (
            <h4 className="mt-2 text-sm font-black uppercase leading-5 tracking-[0.12em] text-white">
              {project.evidenceTitle}
            </h4>
          )}
        </div>
        <span className="w-fit rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-white">
          Business impact
        </span>
      </div>
      <div className={`mt-3 grid gap-2 ${project.evidence.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
        {project.evidence.map((item) => (
          <div key={item} className="rounded-lg border border-blue-100 bg-white p-4 shadow-lg shadow-blue-950/10">
            <CheckCircle2 className="text-blue-500" size={17} />
            <MetricText item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function MetricText({ item }: { item: string }) {
  const [value, ...descriptionParts] = item.split(":");
  const description = descriptionParts.join(":").trim();

  if (!description) {
    return <p className="mt-3 text-sm font-black leading-5 text-blue-900">{item}</p>;
  }

  return (
    <div className="mt-3">
      <p className="text-lg font-black leading-none text-blue-700">{value}</p>
      <p className="mt-2 text-xs font-bold leading-5 text-blue-900/70">{description}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string | readonly string[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700/45">{label}</p>
      {Array.isArray(value) ? (
        <ul className="mt-2 grid gap-2 text-sm leading-6 text-blue-900/70">
          {value.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 rounded-md bg-white/70 p-3 text-[13px] font-semibold leading-6 text-blue-900/70 ring-1 ring-blue-100">{value}</p>
      )}
    </div>
  );
}

type BetterMeCreator = (typeof common.betterMeCreators)[number];

function CreatorStrip({ label, creators }: { label: string; creators: readonly BetterMeCreator[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700/45">{label}</p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {creators.map((creator) => (
          <div key={creator.name} className="flex items-center gap-3 rounded-xl border border-blue-200 bg-white p-3.5 shadow-md shadow-blue-900/8">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-blue-50 ring-2 ring-blue-200">
              <img src={creator.avatar} alt={`${creator.name} avatar`} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-base font-black leading-tight text-blue-950">{creator.name}</p>
              <p className="mt-1.5 w-fit rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-black uppercase leading-3 tracking-[0.04em] text-blue-700 ring-1 ring-blue-100">{creator.followers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultCard({ value, label, icon: Icon }: { value: string; label: string; icon: LucideIcon }) {
  const [headline, ...bodyParts] = label.split(". ");
  const body = bodyParts.join(". ");

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/15 bg-white/[0.08] p-6 shadow-xl shadow-blue-950/20">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white">
          <Icon size={22} />
        </div>
        <p className="text-xs font-black uppercase leading-5 tracking-[0.14em] text-blue-200">{value}</p>
      </div>
      <p className="text-[22px] font-black leading-tight text-white md:text-[24px]">
        <HighlightedMetricText text={headline} />
      </p>
      <p className="mt-4 text-sm font-semibold leading-6 text-blue-100/75">
        <HighlightedMetricText text={body} />
      </p>
    </div>
  );
}

function HighlightedMetricText({ text }: { text: string }) {
  const keywords = [
    "P&L",
    "Strategic Deck",
    "Strategic Proposals",
    "Quotation",
    "Booking",
    "Reporting",
    "SOP",
    "Video Affiliate",
    "Livestream",
    "VietCreator Hub",
    "Creator",
    "KOC Affiliate",
    "ngân sách",
    "kiểm soát",
    "vận hành",
    "báo cáo",
  ];
  const pattern = new RegExp(`(${keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");

  return (
    <>
      {text.split(pattern).map((part, index) => {
        const isHighlighted = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());

        return isHighlighted ? (
          <span key={`${part}-${index}`} className="font-black text-blue-200">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        );
      })}
    </>
  );
}
