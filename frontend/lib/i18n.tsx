"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "te" | "hi";

type OpportunityText = {
  title: string;
  description: string;
  industry: string;
  country: string;
  problem: string;
  whyItExists: string;
  potentialUsers: string[];
  competitors: string[];
  revenueModel: string;
  risks: string[];
  aiInsights: string[];
  marketSizeEstimate: string;
  growthForecast: string;
};

type TrendText = {
  label: string;
  category: string;
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  opportunityText: (id: string) => OpportunityText;
  trendText: (index: number) => TrendText;
  industryName: (name: string) => string;
  monthName: (month: string) => string;
};

const localeLabels: Record<Locale, string> = {
  en: "English",
  te: "తెలుగు",
  hi: "हिन्दी"
};

const ui = {
  en: {
    "nav.dashboard": "Dashboard",
    "nav.opportunities": "Opportunities",
    "nav.trends": "Trends",
    "nav.aiCofounder": "AI Co-Founder",
    "nav.language": "Language",
    "landing.badge": "AI-powered startup opportunity intelligence",
    "landing.title": "Discover Startup Opportunities Before Everyone Else",
    "landing.subtitle": "AI continuously scans the world for emerging opportunities, market gaps, and startup ideas.",
    "landing.explore": "Explore Opportunities",
    "landing.demo": "Watch Demo",
    "landing.scan": "Live opportunity scan",
    "landing.active": "Active",
    "landing.signal1": "Hiring spike in AI compliance",
    "landing.signal2": "Low competition in permit intelligence",
    "landing.signal3": "Research growth in synthetic governance",
    "landing.feature1.title": "Opportunity Detection",
    "landing.feature1.copy": "Continuously scan hiring, funding, policy, review, research, and repository signals.",
    "landing.feature2.title": "Market Gap Analysis",
    "landing.feature2.copy": "Score demand, competition, feasibility, and revenue potential before markets get crowded.",
    "landing.feature3.title": "Trend Forecasting",
    "landing.feature3.copy": "Surface weak signals and momentum shifts with explainable AI trend intelligence.",
    "landing.feature4.title": "AI Co-Founder",
    "landing.feature4.copy": "Turn signals into startup names, pitches, MVP plans, roadmaps, and decks.",
    "landing.customerSignal": "Customer signal",
    "landing.quote": "\"Opportunity Radar compresses weeks of market research into a daily operating system for idea discovery.\"",
    "landing.person": "Maya Chen, Venture Studio Partner",
    "landing.pricing": "Pricing",
    "landing.perMonth": "per user/month",
    "landing.pricingCopy": "Includes live feeds, AI opportunity scoring, startup plan generation, saved opportunities, and export-ready reports.",
    "landing.footer": "Opportunity Radar. Built for founders, analysts, and venture teams.",
    "dashboard.eyebrow": "Command center",
    "dashboard.title": "Opportunity Dashboard",
    "dashboard.total": "Total Opportunities",
    "dashboard.industries": "Trending Industries",
    "dashboard.markets": "Emerging Markets",
    "dashboard.score": "Opportunity Score",
    "dashboard.recent": "Recent Discoveries",
    "dashboard.detected": "detected",
    "dashboard.scoreLabel": "Score",
    "charts.growth": "Opportunity Growth",
    "charts.industry": "Industry Demand",
    "opportunities.eyebrow": "Opportunity feed",
    "opportunities.title": "AI-Detected Startup Opportunities",
    "opportunities.copy": "Ranked by demand signal, competitive whitespace, feasibility, revenue potential, and freshness.",
    "filters.title": "Filters",
    "filters.industry": "Industry",
    "filters.competition": "Competition Level",
    "filters.demand": "Demand Level",
    "filters.country": "Country",
    "filters.time": "Time Range",
    "card.demand": "Demand",
    "card.competition": "Competition",
    "card.feasibility": "Feasibility",
    "card.revenue": "Revenue",
    "card.view": "View Details",
    "card.generate": "Generate Startup Plan",
    "details.problem": "Problem",
    "details.why": "Why It Exists",
    "details.marketDemand": "Market Demand",
    "details.demandSentence": "Demand score is {score}, driven by hiring, funding, and source activity.",
    "details.revenueModel": "Revenue Model",
    "details.marketSize": "Market Size Estimate",
    "details.growth": "Growth Forecast",
    "details.recommendation": "Startup Recommendation",
    "details.recommendationBody": "Start with a focused wedge, validate demand through expert interviews, then ship a narrow workflow product.",
    "details.users": "Potential Users",
    "details.competitors": "Competitors",
    "details.risks": "Risks",
    "details.insights": "AI Insights",
    "details.businessPlan": "Generate Business Plan",
    "details.mvp": "Generate MVP",
    "details.pitch": "Generate Pitch Deck",
    "details.notFound": "Opportunity not found.",
    "trends.eyebrow": "Trend explorer",
    "trends.title": "Emerging markets and research momentum",
    "trends.signals": "Trending Signals",
    "trends.growth": "growth",
    "trends.tech": "Trending Technologies",
    "trends.industries": "Trending Industries",
    "trends.markets": "Emerging Markets",
    "trends.research": "Research Growth",
    "ai.eyebrow": "AI Co-Founder",
    "ai.title": "Generate a startup plan from a raw idea",
    "ai.label": "Startup Idea",
    "ai.defaultIdea": "AI tool that finds compliance risks in generated marketing copy",
    "ai.emptyIdea": "an emerging startup concept",
    "ai.generate": "Generate Plan",
    "ai.name": "Startup Name",
    "ai.pitch": "Elevator Pitch",
    "ai.pitchBody": "SignalForge turns {idea} into an operational product with clear positioning and buyer value.",
    "ai.business": "Business Model",
    "ai.businessBody": "B2B SaaS with team seats, usage-based AI analysis, and enterprise governance features.",
    "ai.revenue": "Revenue Streams",
    "ai.revenueBody": "Monthly subscriptions, premium exports, enterprise integrations, and advisory onboarding.",
    "ai.mvp": "MVP Features",
    "ai.mvpBody": "Signal ingestion, scoring dashboard, recommendation engine, report export, and saved workflows.",
    "ai.marketing": "Marketing Strategy",
    "ai.marketingBody": "Founder-led content, expert interviews, benchmark reports, partner webinars, and targeted outbound.",
    "ai.funding": "Funding Roadmap",
    "ai.fundingBody": "Bootstrap validation, pre-seed after 5 design partners, seed after repeatable paid conversion.",
    "ai.stack": "Tech Stack",
    "ai.stackBody": "Next.js, FastAPI, PostgreSQL, Redis, Celery, vector search, and model provider abstractions."
  },
  te: {
    "nav.dashboard": "డ్యాష్‌బోర్డ్",
    "nav.opportunities": "అవకాశాలు",
    "nav.trends": "ట్రెండ్లు",
    "nav.aiCofounder": "AI సహ-స్థాపకుడు",
    "nav.language": "భాష",
    "landing.badge": "AI ఆధారిత స్టార్టప్ అవకాశాల ఇంటెలిజెన్స్",
    "landing.title": "ఇతరులకంటే ముందే స్టార్టప్ అవకాశాలను కనుగొనండి",
    "landing.subtitle": "AI కొత్త అవకాశాలు, మార్కెట్ ఖాళీలు, స్టార్టప్ ఆలోచనల కోసం ప్రపంచాన్ని నిరంతరం స్కాన్ చేస్తుంది.",
    "landing.explore": "అవకాశాలను చూడండి",
    "landing.demo": "డెమో చూడండి",
    "landing.scan": "లైవ్ అవకాశం స్కాన్",
    "landing.active": "సక్రియం",
    "landing.signal1": "AI కంప్లయెన్స్ ఉద్యోగాల్లో పెరుగుదల",
    "landing.signal2": "పర్మిట్ ఇంటెలిజెన్స్‌లో తక్కువ పోటీ",
    "landing.signal3": "సింథటిక్ గవర్నెన్స్ పరిశోధనలో వృద్ధి",
    "landing.feature1.title": "అవకాశాల గుర్తింపు",
    "landing.feature1.copy": "ఉద్యోగాలు, ఫండింగ్, పాలసీ, సమీక్షలు, పరిశోధన, రిపోజిటరీ సంకేతాలను నిరంతరం స్కాన్ చేయండి.",
    "landing.feature2.title": "మార్కెట్ గ్యాప్ విశ్లేషణ",
    "landing.feature2.copy": "మార్కెట్లు రద్దీ కావడానికి ముందే డిమాండ్, పోటీ, సాధ్యత, ఆదాయ సామర్థ్యాన్ని స్కోర్ చేయండి.",
    "landing.feature3.title": "ట్రెండ్ అంచనా",
    "landing.feature3.copy": "స్పష్టమైన AI ట్రెండ్ ఇంటెలిజెన్స్‌తో బలహీన సంకేతాలు, వేగ మార్పులను చూపించండి.",
    "landing.feature4.title": "AI సహ-స్థాపకుడు",
    "landing.feature4.copy": "సంకేతాలను స్టార్టప్ పేర్లు, పిచ్‌లు, MVP ప్రణాళికలు, రోడ్‌మ్యాప్‌లు, డెక్‌లుగా మార్చండి.",
    "landing.customerSignal": "కస్టమర్ సంకేతం",
    "landing.quote": "\"Opportunity Radar వారాల మార్కెట్ పరిశోధనను రోజువారీ ఆలోచనల ఆపరేటింగ్ సిస్టమ్‌గా మార్చుతుంది.\"",
    "landing.person": "మాయా చెన్, వెంచర్ స్టూడియో భాగస్వామి",
    "landing.pricing": "ధర",
    "landing.perMonth": "ఒక్క వినియోగదారుకు/నెలకు",
    "landing.pricingCopy": "లైవ్ ఫీడ్లు, AI అవకాశం స్కోరింగ్, స్టార్టప్ ప్లాన్ జనరేషన్, సేవ్ చేసిన అవకాశాలు, ఎగుమతికి సిద్ధమైన రిపోర్టులు కలిగి ఉంటుంది.",
    "landing.footer": "Opportunity Radar. స్థాపకులు, విశ్లేషకులు, వెంచర్ బృందాల కోసం నిర్మించబడింది.",
    "dashboard.eyebrow": "కమాండ్ సెంటర్",
    "dashboard.title": "అవకాశాల డ్యాష్‌బోర్డ్",
    "dashboard.total": "మొత్తం అవకాశాలు",
    "dashboard.industries": "ట్రెండింగ్ పరిశ్రమలు",
    "dashboard.markets": "కొత్త మార్కెట్లు",
    "dashboard.score": "అవకాశ స్కోర్",
    "dashboard.recent": "తాజా కనుగొనింపులు",
    "dashboard.detected": "గుర్తించబడింది",
    "dashboard.scoreLabel": "స్కోర్",
    "charts.growth": "అవకాశాల వృద్ధి",
    "charts.industry": "పరిశ్రమ డిమాండ్",
    "opportunities.eyebrow": "అవకాశాల ఫీడ్",
    "opportunities.title": "AI గుర్తించిన స్టార్టప్ అవకాశాలు",
    "opportunities.copy": "డిమాండ్ సంకేతం, పోటీ ఖాళీ, సాధ్యత, ఆదాయ సామర్థ్యం, తాజాదనం ఆధారంగా ర్యాంక్ చేయబడింది.",
    "filters.title": "ఫిల్టర్లు",
    "filters.industry": "పరిశ్రమ",
    "filters.competition": "పోటీ స్థాయి",
    "filters.demand": "డిమాండ్ స్థాయి",
    "filters.country": "దేశం",
    "filters.time": "కాల పరిమితి",
    "card.demand": "డిమాండ్",
    "card.competition": "పోటీ",
    "card.feasibility": "సాధ్యత",
    "card.revenue": "ఆదాయం",
    "card.view": "వివరాలు చూడండి",
    "card.generate": "స్టార్టప్ ప్లాన్ రూపొందించండి",
    "details.problem": "సమస్య",
    "details.why": "ఇది ఎందుకు ఉంది",
    "details.marketDemand": "మార్కెట్ డిమాండ్",
    "details.demandSentence": "డిమాండ్ స్కోర్ {score}; ఇది ఉద్యోగాలు, ఫండింగ్, సోర్స్ యాక్టివిటీ ఆధారంగా ఉంది.",
    "details.revenueModel": "ఆదాయ మోడల్",
    "details.marketSize": "మార్కెట్ పరిమాణ అంచనా",
    "details.growth": "వృద్ధి అంచనా",
    "details.recommendation": "స్టార్టప్ సిఫార్సు",
    "details.recommendationBody": "స్పష్టమైన చిన్న ప్రారంభంతో మొదలుపెట్టి, నిపుణుల ఇంటర్వ్యూల ద్వారా డిమాండ్‌ను ధృవీకరించి, తరువాత సన్నని వర్క్‌ఫ్లో ఉత్పత్తిని విడుదల చేయండి.",
    "details.users": "సంభావ్య వినియోగదారులు",
    "details.competitors": "పోటీదారులు",
    "details.risks": "రిస్కులు",
    "details.insights": "AI అంతర్దృష్టులు",
    "details.businessPlan": "బిజినెస్ ప్లాన్ రూపొందించండి",
    "details.mvp": "MVP రూపొందించండి",
    "details.pitch": "పిచ్ డెక్ రూపొందించండి",
    "details.notFound": "అవకాశం దొరకలేదు.",
    "trends.eyebrow": "ట్రెండ్ ఎక్స్‌ప్లోరర్",
    "trends.title": "కొత్త మార్కెట్లు మరియు పరిశోధన వేగం",
    "trends.signals": "ట్రెండింగ్ సంకేతాలు",
    "trends.growth": "వృద్ధి",
    "trends.tech": "ట్రెండింగ్ టెక్నాలజీలు",
    "trends.industries": "ట్రెండింగ్ పరిశ్రమలు",
    "trends.markets": "కొత్త మార్కెట్లు",
    "trends.research": "పరిశోధన వృద్ధి",
    "ai.eyebrow": "AI సహ-స్థాపకుడు",
    "ai.title": "రా ఆలోచన నుంచి స్టార్టప్ ప్లాన్ రూపొందించండి",
    "ai.label": "స్టార్టప్ ఆలోచన",
    "ai.defaultIdea": "జనరేటెడ్ మార్కెటింగ్ కాపీలో కంప్లయెన్స్ రిస్కులను గుర్తించే AI టూల్",
    "ai.emptyIdea": "కొత్త స్టార్టప్ కాన్సెప్ట్",
    "ai.generate": "ప్లాన్ రూపొందించండి",
    "ai.name": "స్టార్టప్ పేరు",
    "ai.pitch": "ఎలివేటర్ పిచ్",
    "ai.pitchBody": "SignalForge {idea} ను స్పష్టమైన పొజిషనింగ్ మరియు కొనుగోలుదారుల విలువ ఉన్న ఆపరేషనల్ ఉత్పత్తిగా మార్చుతుంది.",
    "ai.business": "బిజినెస్ మోడల్",
    "ai.businessBody": "టీమ్ సీట్లు, వినియోగ ఆధారిత AI విశ్లేషణ, ఎంటర్‌ప్రైజ్ గవర్నెన్స్ ఫీచర్లతో B2B SaaS.",
    "ai.revenue": "ఆదాయ మార్గాలు",
    "ai.revenueBody": "నెలవారీ సబ్‌స్క్రిప్షన్లు, ప్రీమియం ఎగుమతులు, ఎంటర్‌ప్రైజ్ ఇంటిగ్రేషన్లు, అడ్వైజరీ ఆన్‌బోర్డింగ్.",
    "ai.mvp": "MVP ఫీచర్లు",
    "ai.mvpBody": "సిగ్నల్ ఇన్‌జెషన్, స్కోరింగ్ డ్యాష్‌బోర్డ్, సిఫార్సు ఇంజిన్, రిపోర్ట్ ఎగుమతి, సేవ్ చేసిన వర్క్‌ఫ్లోలు.",
    "ai.marketing": "మార్కెటింగ్ వ్యూహం",
    "ai.marketingBody": "స్థాపకుల కంటెంట్, నిపుణుల ఇంటర్వ్యూలు, బెంచ్‌మార్క్ రిపోర్టులు, భాగస్వామి వెబినార్లు, లక్ష్యిత అవుట్‌బౌండ్.",
    "ai.funding": "ఫండింగ్ రోడ్‌మ్యాప్",
    "ai.fundingBody": "బూట్‌స్ట్రాప్ ధృవీకరణ, 5 డిజైన్ భాగస్వాముల తర్వాత ప్రీ-సీడ్, పునరావృత చెల్లింపు కన్వర్షన్ తర్వాత సీడ్.",
    "ai.stack": "టెక్ స్టాక్",
    "ai.stackBody": "Next.js, FastAPI, PostgreSQL, Redis, Celery, వెక్టర్ సెర్చ్, మోడల్ ప్రొవైడర్ అబ్స్ట్రాక్షన్లు."
  },
  hi: {
    "nav.dashboard": "डैशबोर्ड",
    "nav.opportunities": "अवसर",
    "nav.trends": "रुझान",
    "nav.aiCofounder": "AI सह-संस्थापक",
    "nav.language": "भाषा",
    "landing.badge": "AI-संचालित स्टार्टअप अवसर इंटेलिजेंस",
    "landing.title": "सबसे पहले स्टार्टअप अवसर खोजें",
    "landing.subtitle": "AI उभरते अवसरों, बाजार की कमी और स्टार्टअप विचारों के लिए लगातार दुनिया को स्कैन करता है.",
    "landing.explore": "अवसर देखें",
    "landing.demo": "डेमो देखें",
    "landing.scan": "लाइव अवसर स्कैन",
    "landing.active": "सक्रिय",
    "landing.signal1": "AI अनुपालन नौकरियों में तेज़ी",
    "landing.signal2": "परमिट इंटेलिजेंस में कम प्रतिस्पर्धा",
    "landing.signal3": "सिंथेटिक गवर्नेंस शोध में वृद्धि",
    "landing.feature1.title": "अवसर पहचान",
    "landing.feature1.copy": "नौकरी, फंडिंग, नीति, समीक्षा, शोध और रिपॉजिटरी संकेतों को लगातार स्कैन करें.",
    "landing.feature2.title": "बाजार अंतर विश्लेषण",
    "landing.feature2.copy": "बाजार भीड़भाड़ से पहले मांग, प्रतिस्पर्धा, व्यवहार्यता और राजस्व क्षमता को स्कोर करें.",
    "landing.feature3.title": "रुझान पूर्वानुमान",
    "landing.feature3.copy": "समझने योग्य AI रुझान इंटेलिजेंस से कमजोर संकेत और गति बदलाव सामने लाएं.",
    "landing.feature4.title": "AI सह-संस्थापक",
    "landing.feature4.copy": "संकेतों को स्टार्टअप नाम, पिच, MVP योजना, रोडमैप और डेक में बदलें.",
    "landing.customerSignal": "ग्राहक संकेत",
    "landing.quote": "\"Opportunity Radar हफ्तों के बाजार शोध को विचार खोजने की दैनिक प्रणाली में बदल देता है.\"",
    "landing.person": "माया चेन, वेंचर स्टूडियो पार्टनर",
    "landing.pricing": "मूल्य",
    "landing.perMonth": "प्रति उपयोगकर्ता/माह",
    "landing.pricingCopy": "लाइव फीड, AI अवसर स्कोरिंग, स्टार्टअप योजना निर्माण, सेव किए अवसर और एक्सपोर्ट-रेडी रिपोर्ट शामिल हैं.",
    "landing.footer": "Opportunity Radar. संस्थापकों, विश्लेषकों और वेंचर टीमों के लिए बनाया गया.",
    "dashboard.eyebrow": "कमांड सेंटर",
    "dashboard.title": "अवसर डैशबोर्ड",
    "dashboard.total": "कुल अवसर",
    "dashboard.industries": "ट्रेंडिंग उद्योग",
    "dashboard.markets": "उभरते बाजार",
    "dashboard.score": "अवसर स्कोर",
    "dashboard.recent": "हाल की खोजें",
    "dashboard.detected": "पहचाना गया",
    "dashboard.scoreLabel": "स्कोर",
    "charts.growth": "अवसर वृद्धि",
    "charts.industry": "उद्योग मांग",
    "opportunities.eyebrow": "अवसर फीड",
    "opportunities.title": "AI द्वारा पहचाने गए स्टार्टअप अवसर",
    "opportunities.copy": "मांग संकेत, प्रतिस्पर्धी खाली जगह, व्यवहार्यता, राजस्व क्षमता और ताज़गी के आधार पर रैंक किया गया.",
    "filters.title": "फिल्टर",
    "filters.industry": "उद्योग",
    "filters.competition": "प्रतिस्पर्धा स्तर",
    "filters.demand": "मांग स्तर",
    "filters.country": "देश",
    "filters.time": "समय सीमा",
    "card.demand": "मांग",
    "card.competition": "प्रतिस्पर्धा",
    "card.feasibility": "व्यवहार्यता",
    "card.revenue": "राजस्व",
    "card.view": "विवरण देखें",
    "card.generate": "स्टार्टअप प्लान बनाएं",
    "details.problem": "समस्या",
    "details.why": "यह क्यों मौजूद है",
    "details.marketDemand": "बाजार मांग",
    "details.demandSentence": "मांग स्कोर {score} है, जो नौकरी, फंडिंग और स्रोत गतिविधि से प्रेरित है.",
    "details.revenueModel": "राजस्व मॉडल",
    "details.marketSize": "बाजार आकार अनुमान",
    "details.growth": "वृद्धि पूर्वानुमान",
    "details.recommendation": "स्टार्टअप सिफारिश",
    "details.recommendationBody": "एक केंद्रित शुरुआती हिस्से से शुरू करें, विशेषज्ञ साक्षात्कारों से मांग सत्यापित करें, फिर संकीर्ण वर्कफ़्लो उत्पाद लॉन्च करें.",
    "details.users": "संभावित उपयोगकर्ता",
    "details.competitors": "प्रतिस्पर्धी",
    "details.risks": "जोखिम",
    "details.insights": "AI अंतर्दृष्टि",
    "details.businessPlan": "बिजनेस प्लान बनाएं",
    "details.mvp": "MVP बनाएं",
    "details.pitch": "पिच डेक बनाएं",
    "details.notFound": "अवसर नहीं मिला.",
    "trends.eyebrow": "रुझान एक्सप्लोरर",
    "trends.title": "उभरते बाजार और शोध गति",
    "trends.signals": "ट्रेंडिंग संकेत",
    "trends.growth": "वृद्धि",
    "trends.tech": "ट्रेंडिंग टेक्नोलॉजी",
    "trends.industries": "ट्रेंडिंग उद्योग",
    "trends.markets": "उभरते बाजार",
    "trends.research": "शोध वृद्धि",
    "ai.eyebrow": "AI सह-संस्थापक",
    "ai.title": "कच्चे विचार से स्टार्टअप प्लान बनाएं",
    "ai.label": "स्टार्टअप विचार",
    "ai.defaultIdea": "जनरेटेड मार्केटिंग कॉपी में अनुपालन जोखिम खोजने वाला AI टूल",
    "ai.emptyIdea": "एक उभरता स्टार्टअप विचार",
    "ai.generate": "प्लान बनाएं",
    "ai.name": "स्टार्टअप नाम",
    "ai.pitch": "एलिवेटर पिच",
    "ai.pitchBody": "SignalForge {idea} को स्पष्ट पोजिशनिंग और खरीदार मूल्य वाले परिचालन उत्पाद में बदलता है.",
    "ai.business": "बिजनेस मॉडल",
    "ai.businessBody": "टीम सीट, उपयोग-आधारित AI विश्लेषण और एंटरप्राइज गवर्नेंस फीचर्स वाला B2B SaaS.",
    "ai.revenue": "राजस्व स्रोत",
    "ai.revenueBody": "मासिक सदस्यता, प्रीमियम एक्सपोर्ट, एंटरप्राइज इंटीग्रेशन और सलाहकार ऑनबोर्डिंग.",
    "ai.mvp": "MVP फीचर्स",
    "ai.mvpBody": "सिग्नल इनजेशन, स्कोरिंग डैशबोर्ड, सिफारिश इंजन, रिपोर्ट एक्सपोर्ट और सेव किए वर्कफ़्लो.",
    "ai.marketing": "मार्केटिंग रणनीति",
    "ai.marketingBody": "संस्थापक-नेतृत्व कंटेंट, विशेषज्ञ साक्षात्कार, बेंचमार्क रिपोर्ट, पार्टनर वेबिनार और लक्षित आउटबाउंड.",
    "ai.funding": "फंडिंग रोडमैप",
    "ai.fundingBody": "बूटस्ट्रैप सत्यापन, 5 डिजाइन पार्टनर के बाद प्री-सीड, दोहराए जाने वाले भुगतान रूपांतरण के बाद सीड.",
    "ai.stack": "टेक स्टैक",
    "ai.stackBody": "Next.js, FastAPI, PostgreSQL, Redis, Celery, वेक्टर सर्च और मॉडल प्रोवाइडर एब्स्ट्रैक्शन."
  }
} as const;

const opportunityCopy: Record<Locale, Record<string, OpportunityText>> = {
  en: {
    "compliance-copilot": {
      title: "Compliance Copilot for AI-Generated Marketing",
      description: "Regulated teams need automated review for AI-created claims across ads, landing pages, and sales collateral.",
      industry: "RegTech",
      country: "United States",
      problem: "Marketing teams are adopting generative AI faster than compliance teams can review content.",
      whyItExists: "AI content volume is rising, but review workflows still depend on manual policy interpretation.",
      potentialUsers: ["Fintech marketers", "Healthcare growth teams", "Legal reviewers", "Agency operators"],
      competitors: ["Manual legal review", "Generic brand governance tools", "Enterprise GRC suites"],
      revenueModel: "Seat-based SaaS with usage tiers for scanned assets and premium audit exports.",
      risks: ["Regulatory nuance by geography", "False positives that slow creative teams", "Enterprise procurement cycles"],
      aiInsights: ["Hiring for AI policy roles rose sharply.", "Product review data shows frustration with slow approval loops."],
      marketSizeEstimate: "$1.8B serviceable market across regulated content operations.",
      growthForecast: "High growth for 24 months as AI content governance budgets mature."
    },
    "climate-permit-radar": {
      title: "Climate Permit Radar for Infrastructure Builders",
      description: "A permitting intelligence layer for climate hardware, charging networks, and grid projects.",
      industry: "Climate",
      country: "Global",
      problem: "Infrastructure teams lose months navigating fragmented permitting and policy changes.",
      whyItExists: "Government incentives and local rules change faster than project planning cycles.",
      potentialUsers: ["EV charging operators", "Solar developers", "Battery storage teams", "Municipal consultants"],
      competitors: ["Policy newsletters", "Consultants", "Local government portals"],
      revenueModel: "Annual platform subscription plus premium jurisdiction monitoring.",
      risks: ["Data freshness", "Local rule complexity", "Need for policy-domain expertise"],
      aiInsights: ["Government policy updates cluster around grid modernization.", "Funding announcements imply near-term procurement demand."],
      marketSizeEstimate: "$2.4B in workflow and intelligence spend for climate infrastructure.",
      growthForecast: "Strong growth tied to public funding cycles and grid investment."
    },
    "developer-toil-scanner": {
      title: "Developer Toil Scanner for Internal Tools",
      description: "Analyze tickets, repos, and chat to identify repeated engineering toil worth automating.",
      industry: "Developer Tools",
      country: "Remote",
      problem: "Engineering teams waste time on repeated internal workflows that never become roadmap priorities.",
      whyItExists: "Toil is spread across tickets, chat, runbooks, and code comments, making it hard to quantify.",
      potentialUsers: ["Platform teams", "Engineering managers", "DevOps leads", "Internal tools teams"],
      competitors: ["Observability tools", "Project management dashboards", "Manual retrospectives"],
      revenueModel: "Per-engineer SaaS pricing with enterprise connectors.",
      risks: ["Sensitive source data", "Connector maintenance", "Crowded developer productivity market"],
      aiInsights: ["GitHub trends show growth in internal developer platform tooling.", "Job posts mention platform engineering more frequently."],
      marketSizeEstimate: "$3.1B across developer productivity and platform engineering tooling.",
      growthForecast: "Moderate to high growth as engineering efficiency remains board-level."
    }
  },
  te: {
    "compliance-copilot": {
      title: "AI రూపొందించిన మార్కెటింగ్ కోసం కంప్లయెన్స్ కోపైలట్",
      description: "ప్రకటనలు, ల్యాండింగ్ పేజీలు, సేల్స్ మెటీరియల్‌లో AI సృష్టించిన క్లెయిమ్‌లకు నియంత్రిత బృందాలకు ఆటోమేటెడ్ సమీక్ష అవసరం.",
      industry: "రెగ్‌టెక్",
      country: "యునైటెడ్ స్టేట్స్",
      problem: "మార్కెటింగ్ బృందాలు కంప్లయెన్స్ బృందాలు కంటెంట్‌ను సమీక్షించగల వేగం కంటే వేగంగా జనరేటివ్ AIను స్వీకరిస్తున్నాయి.",
      whyItExists: "AI కంటెంట్ పరిమాణం పెరుగుతోంది, కానీ సమీక్ష వర్క్‌ఫ్లోలు ఇంకా మాన్యువల్ పాలసీ అర్థం చేసుకోవడంపై ఆధారపడుతున్నాయి.",
      potentialUsers: ["ఫిన్‌టెక్ మార్కెటర్లు", "హెల్త్‌కేర్ గ్రోత్ బృందాలు", "లీగల్ రివ్యూవర్లు", "ఏజెన్సీ ఆపరేటర్లు"],
      competitors: ["మాన్యువల్ లీగల్ సమీక్ష", "సాధారణ బ్రాండ్ గవర్నెన్స్ టూల్స్", "ఎంటర్‌ప్రైజ్ GRC సూట్లు"],
      revenueModel: "స్కాన్ చేసిన ఆస్తులకు వినియోగ స్థాయిలు, ప్రీమియం ఆడిట్ ఎగుమతులతో సీట్-ఆధారిత SaaS.",
      risks: ["ప్రాంతానుసార నియంత్రణ సూక్ష్మత", "క్రియేటివ్ బృందాలను నెమ్మదించే ఫాల్స్ పాజిటివ్‌లు", "ఎంటర్‌ప్రైజ్ కొనుగోలు చక్రాలు"],
      aiInsights: ["AI పాలసీ పాత్రల కోసం నియామకాలు గట్టిగా పెరిగాయి.", "ప్రొడక్ట్ రివ్యూ డేటా నెమ్మదైన ఆమోదాలపై అసంతృప్తిని చూపుతుంది."],
      marketSizeEstimate: "నియంత్రిత కంటెంట్ ఆపరేషన్లలో $1.8B సేవ చేయగల మార్కెట్.",
      growthForecast: "AI కంటెంట్ గవర్నెన్స్ బడ్జెట్లు పరిపక్వం చెందుతున్న కొద్దీ 24 నెలల పాటు అధిక వృద్ధి."
    },
    "climate-permit-radar": {
      title: "ఇన్‌ఫ్రాస్ట్రక్చర్ బిల్డర్ల కోసం క్లైమేట్ పర్మిట్ రాడార్",
      description: "క్లైమేట్ హార్డ్‌వేర్, ఛార్జింగ్ నెట్‌వర్క్‌లు, గ్రిడ్ ప్రాజెక్టులకు పర్మిటింగ్ ఇంటెలిజెన్స్ లేయర్.",
      industry: "క్లైమేట్",
      country: "గ్లోబల్",
      problem: "ఇన్‌ఫ్రాస్ట్రక్చర్ బృందాలు విభజిత పర్మిటింగ్, పాలసీ మార్పుల్లో నెలలు కోల్పోతాయి.",
      whyItExists: "ప్రభుత్వ ప్రోత్సాహకాలు, స్థానిక నియమాలు ప్రాజెక్ట్ ప్రణాళిక చక్రాల కంటే వేగంగా మారుతున్నాయి.",
      potentialUsers: ["EV ఛార్జింగ్ ఆపరేటర్లు", "సోలార్ డెవలపర్లు", "బ్యాటరీ స్టోరేజ్ బృందాలు", "మునిసిపల్ కన్సల్టెంట్లు"],
      competitors: ["పాలసీ న్యూస్‌లెటర్లు", "కన్సల్టెంట్లు", "స్థానిక ప్రభుత్వ పోర్టల్స్"],
      revenueModel: "వార్షిక ప్లాట్‌ఫారమ్ సబ్‌స్క్రిప్షన్ మరియు ప్రీమియం జ్యూరిస్డిక్షన్ మానిటరింగ్.",
      risks: ["డేటా తాజాదనం", "స్థానిక నియమాల సంక్లిష్టత", "పాలసీ-డొమైన్ నైపుణ్యం అవసరం"],
      aiInsights: ["ప్రభుత్వ పాలసీ అప్‌డేట్లు గ్రిడ్ ఆధునీకరణ చుట్టూ కేంద్రీకృతమవుతున్నాయి.", "ఫండింగ్ ప్రకటనలు సమీపకాల కొనుగోలు డిమాండ్‌ను సూచిస్తున్నాయి."],
      marketSizeEstimate: "క్లైమేట్ ఇన్‌ఫ్రాస్ట్రక్చర్ వర్క్‌ఫ్లో, ఇంటెలిజెన్స్ ఖర్చులో $2.4B.",
      growthForecast: "ప్రభుత్వ ఫండింగ్ చక్రాలు, గ్రిడ్ పెట్టుబడులకు అనుసంధానమైన బలమైన వృద్ధి."
    },
    "developer-toil-scanner": {
      title: "ఇంటర్నల్ టూల్స్ కోసం డెవలపర్ టాయిల్ స్కానర్",
      description: "ఆటోమేట్ చేయదగిన పునరావృత ఇంజినీరింగ్ పనిని గుర్తించడానికి టికెట్లు, రిపోలు, చాట్‌ను విశ్లేషించండి.",
      industry: "డెవలపర్ టూల్స్",
      country: "రిమోట్",
      problem: "రోడ్‌మ్యాప్ ప్రాధాన్యతలు కాని పునరావృత అంతర్గత వర్క్‌ఫ్లోలపై ఇంజినీరింగ్ బృందాలు సమయం వృథా చేస్తాయి.",
      whyItExists: "టాయిల్ టికెట్లు, చాట్, రన్‌బుక్‌లు, కోడ్ కామెంట్లలో విస్తరించి ఉండటంతో దాన్ని కొలవడం కష్టం.",
      potentialUsers: ["ప్లాట్‌ఫారమ్ బృందాలు", "ఇంజినీరింగ్ మేనేజర్లు", "డెవ్‌ఆప్స్ లీడ్స్", "ఇంటర్నల్ టూల్స్ బృందాలు"],
      competitors: ["ఆబ్జర్వబిలిటీ టూల్స్", "ప్రాజెక్ట్ మేనేజ్‌మెంట్ డ్యాష్‌బోర్డులు", "మాన్యువల్ రెట్రోస్పెక్టివ్‌లు"],
      revenueModel: "ఎంటర్‌ప్రైజ్ కనెక్టర్లతో ప్రతి ఇంజినీర్‌కు SaaS ధర.",
      risks: ["సున్నితమైన సోర్స్ డేటా", "కనెక్టర్ నిర్వహణ", "రద్దీగా ఉన్న డెవలపర్ ఉత్పాదకత మార్కెట్"],
      aiInsights: ["GitHub ట్రెండ్లు ఇంటర్నల్ డెవలపర్ ప్లాట్‌ఫారమ్ టూలింగ్‌లో వృద్ధిని చూపుతున్నాయి.", "జాబ్ పోస్టులు ప్లాట్‌ఫారమ్ ఇంజినీరింగ్‌ను ఎక్కువగా ప్రస్తావిస్తున్నాయి."],
      marketSizeEstimate: "డెవలపర్ ఉత్పాదకత, ప్లాట్‌ఫారమ్ ఇంజినీరింగ్ టూలింగ్‌లో $3.1B.",
      growthForecast: "ఇంజినీరింగ్ సామర్థ్యం బోర్డు స్థాయి అంశంగా ఉండటం వల్ల మధ్యస్థ నుండి అధిక వృద్ధి."
    }
  },
  hi: {
    "compliance-copilot": {
      title: "AI-जनरेटेड मार्केटिंग के लिए अनुपालन कोपायलट",
      description: "विनियमित टीमों को विज्ञापन, लैंडिंग पेज और सेल्स सामग्री में AI द्वारा बनाए दावों की स्वचालित समीक्षा चाहिए.",
      industry: "रेगटेक",
      country: "संयुक्त राज्य",
      problem: "मार्केटिंग टीमें जनरेटिव AI को अनुपालन टीमों की समीक्षा क्षमता से तेज़ अपना रही हैं.",
      whyItExists: "AI कंटेंट की मात्रा बढ़ रही है, लेकिन समीक्षा वर्कफ़्लो अभी भी मैनुअल नीति व्याख्या पर निर्भर हैं.",
      potentialUsers: ["फिनटेक मार्केटर", "हेल्थकेयर ग्रोथ टीमें", "कानूनी समीक्षक", "एजेंसी ऑपरेटर"],
      competitors: ["मैनुअल कानूनी समीक्षा", "सामान्य ब्रांड गवर्नेंस टूल", "एंटरप्राइज GRC सूट"],
      revenueModel: "स्कैन किए गए एसेट और प्रीमियम ऑडिट एक्सपोर्ट के लिए उपयोग स्तरों वाला सीट-आधारित SaaS.",
      risks: ["भूगोल के अनुसार नियामकीय सूक्ष्मता", "क्रिएटिव टीमों को धीमा करने वाले गलत पॉजिटिव", "एंटरप्राइज खरीद चक्र"],
      aiInsights: ["AI नीति भूमिकाओं के लिए भर्ती तेजी से बढ़ी.", "प्रोडक्ट रिव्यू डेटा धीमे अनुमोदन चक्रों से निराशा दिखाता है."],
      marketSizeEstimate: "विनियमित कंटेंट संचालन में $1.8B सेवा योग्य बाजार.",
      growthForecast: "AI कंटेंट गवर्नेंस बजट परिपक्व होने पर 24 महीनों तक उच्च वृद्धि."
    },
    "climate-permit-radar": {
      title: "इन्फ्रास्ट्रक्चर बिल्डरों के लिए क्लाइमेट परमिट रडार",
      description: "क्लाइमेट हार्डवेयर, चार्जिंग नेटवर्क और ग्रिड प्रोजेक्ट्स के लिए परमिटिंग इंटेलिजेंस लेयर.",
      industry: "क्लाइमेट",
      country: "वैश्विक",
      problem: "इन्फ्रास्ट्रक्चर टीमें बिखरे परमिट और नीति बदलावों में महीनों खो देती हैं.",
      whyItExists: "सरकारी प्रोत्साहन और स्थानीय नियम प्रोजेक्ट प्लानिंग चक्रों से तेज़ बदलते हैं.",
      potentialUsers: ["EV चार्जिंग ऑपरेटर", "सोलर डेवलपर", "बैटरी स्टोरेज टीमें", "नगरपालिका सलाहकार"],
      competitors: ["नीति न्यूज़लेटर", "सलाहकार", "स्थानीय सरकारी पोर्टल"],
      revenueModel: "वार्षिक प्लेटफॉर्म सदस्यता और प्रीमियम अधिकारक्षेत्र निगरानी.",
      risks: ["डेटा ताज़गी", "स्थानीय नियमों की जटिलता", "नीति-डोमेन विशेषज्ञता की आवश्यकता"],
      aiInsights: ["सरकारी नीति अपडेट ग्रिड आधुनिकीकरण के आसपास क्लस्टर हो रहे हैं.", "फंडिंग घोषणाएं निकट-अवधि खरीद मांग का संकेत देती हैं."],
      marketSizeEstimate: "क्लाइमेट इन्फ्रास्ट्रक्चर वर्कफ़्लो और इंटेलिजेंस खर्च में $2.4B.",
      growthForecast: "सार्वजनिक फंडिंग चक्रों और ग्रिड निवेश से जुड़ी मजबूत वृद्धि."
    },
    "developer-toil-scanner": {
      title: "इंटरनल टूल्स के लिए डेवलपर टॉयल स्कैनर",
      description: "ऑटोमेट करने योग्य दोहराए गए इंजीनियरिंग काम को पहचानने के लिए टिकट, रिपो और चैट का विश्लेषण करें.",
      industry: "डेवलपर टूल्स",
      country: "रिमोट",
      problem: "इंजीनियरिंग टीमें दोहराए गए आंतरिक वर्कफ़्लो पर समय गंवाती हैं जो रोडमैप प्राथमिकता नहीं बनते.",
      whyItExists: "टॉयल टिकट, चैट, रनबुक और कोड टिप्पणियों में फैला होता है, इसलिए उसे मापना कठिन है.",
      potentialUsers: ["प्लेटफॉर्म टीमें", "इंजीनियरिंग मैनेजर", "DevOps लीड", "इंटरनल टूल्स टीमें"],
      competitors: ["ऑब्जर्वेबिलिटी टूल", "प्रोजेक्ट मैनेजमेंट डैशबोर्ड", "मैनुअल रेट्रोस्पेक्टिव"],
      revenueModel: "एंटरप्राइज कनेक्टर के साथ प्रति-इंजीनियर SaaS मूल्य.",
      risks: ["संवेदनशील स्रोत डेटा", "कनेक्टर रखरखाव", "भीड़भाड़ वाला डेवलपर उत्पादकता बाजार"],
      aiInsights: ["GitHub रुझान इंटरनल डेवलपर प्लेटफॉर्म टूलिंग में वृद्धि दिखाते हैं.", "जॉब पोस्ट प्लेटफॉर्म इंजीनियरिंग का अधिक उल्लेख कर रहे हैं."],
      marketSizeEstimate: "डेवलपर उत्पादकता और प्लेटफॉर्म इंजीनियरिंग टूलिंग में $3.1B.",
      growthForecast: "इंजीनियरिंग दक्षता बोर्ड-स्तर का विषय रहने से मध्यम से उच्च वृद्धि."
    }
  }
};

const trendCopy: Record<Locale, TrendText[]> = {
  en: [
    { label: "Agentic workflow audits", category: "AI" },
    { label: "Grid interconnection software", category: "Climate" },
    { label: "Synthetic data governance", category: "RegTech" },
    { label: "Research ops automation", category: "Health" }
  ],
  te: [
    { label: "ఏజెంటిక్ వర్క్‌ఫ్లో ఆడిట్లు", category: "AI" },
    { label: "గ్రిడ్ ఇంటర్‌కనెక్షన్ సాఫ్ట్‌వేర్", category: "క్లైమేట్" },
    { label: "సింథటిక్ డేటా గవర్నెన్స్", category: "రెగ్‌టెక్" },
    { label: "రిసెర్చ్ ఆప్స్ ఆటోమేషన్", category: "హెల్త్" }
  ],
  hi: [
    { label: "एजेंटिक वर्कफ़्लो ऑडिट", category: "AI" },
    { label: "ग्रिड इंटरकनेक्शन सॉफ्टवेयर", category: "क्लाइमेट" },
    { label: "सिंथेटिक डेटा गवर्नेंस", category: "रेगटेक" },
    { label: "रिसर्च ऑप्स ऑटोमेशन", category: "हेल्थ" }
  ]
};

const industryCopy: Record<Locale, Record<string, string>> = {
  en: { "AI Ops": "AI Ops", Climate: "Climate", RegTech: "RegTech", Health: "Health", DevTools: "DevTools" },
  te: { "AI Ops": "AI ఆప్స్", Climate: "క్లైమేట్", RegTech: "రెగ్‌టెక్", Health: "హెల్త్", DevTools: "డెవ్‌టూల్స్" },
  hi: { "AI Ops": "AI ऑप्स", Climate: "क्लाइमेट", RegTech: "रेगटेक", Health: "हेल्थ", DevTools: "डेवटूल्स" }
};

const monthCopy: Record<Locale, Record<string, string>> = {
  en: { Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun" },
  te: { Jan: "జన", Feb: "ఫిబ్ర", Mar: "మార్చి", Apr: "ఏప్రి", May: "మే", Jun: "జూన్" },
  hi: { Jan: "जन", Feb: "फ़र", Mar: "मार्च", Apr: "अप्रै", May: "मई", Jun: "जून" }
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("opportunity-radar-locale") as Locale | null;
    if (savedLocale && savedLocale in ui) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("opportunity-radar-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => ui[locale][key as keyof typeof ui.en] ?? ui.en[key as keyof typeof ui.en] ?? key,
      opportunityText: (id) => opportunityCopy[locale][id] ?? opportunityCopy.en[id],
      trendText: (index) => trendCopy[locale][index] ?? trendCopy.en[index],
      industryName: (name) => industryCopy[locale][name] ?? name,
      monthName: (month) => monthCopy[locale][month] ?? month
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className="flex items-center gap-2 text-sm text-slate-300">
      <span className="sr-only">{t("nav.language")}</span>
      <select
        aria-label={t("nav.language")}
        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition hover:bg-white/10 focus:border-accent"
        onChange={(event) => setLocale(event.target.value as Locale)}
        value={locale}
      >
        {(Object.keys(localeLabels) as Locale[]).map((item) => (
          <option className="bg-ink text-white" key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
