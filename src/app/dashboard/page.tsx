'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Search, 
  Users, 
  Phone, 
  Mail, 
  Calendar,
  Eye,
  MousePointer,
  Globe,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overzicht', icon: BarChart3 },
    { id: 'seo', label: 'SEO Performance', icon: Search },
    { id: 'sea', label: 'SEA Campagnes', icon: TrendingUp },
    { id: 'analytics', label: 'Website Analytics', icon: Eye },
    { id: 'leads', label: 'Aanvragen & Leads', icon: Users },
    { id: 'performance', label: 'Website Performance', icon: Globe },
    { id: 'settings', label: 'Instellingen', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'seo':
        return <SEOSection />;
      case 'sea':
        return <SEASection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'leads':
        return <LeadsSection />;
      case 'performance':
        return <PerformanceSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-yellow-500 text-black rounded-lg shadow-lg"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-lentjes-sinds1979-1.png"
                alt="Lentjes Droomkeukens Logo"
                width={150}
                height={75}
                className="h-auto w-auto max-w-[150px]"
              />
            </div>
            <h1 className="text-lg font-bold text-black mt-2 text-center">
              Marketing Dashboard
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-black'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              <LogOut size={20} className="mr-3" />
              Uitloggen
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`lg:ml-64 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

// Overview Section Component
function OverviewSection() {
  const stats = [
    { label: 'Website Bezoekers', value: '2,847', change: '+12.5%', icon: Eye, color: 'bg-blue-500' },
    { label: 'SEO Posities', value: 'Top 10', change: '+3 posities', icon: Search, color: 'bg-green-500' },
    { label: 'SEA Clicks', value: '1,234', change: '+8.2%', icon: TrendingUp, color: 'bg-yellow-500' },
    { label: 'Nieuwe Aanvragen', value: '47', change: '+15.3%', icon: Users, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overzicht</h2>
        <div className="text-sm text-gray-500">Laatste update: {new Date().toLocaleDateString('nl-NL')}</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recente Aanvragen</h3>
          <div className="space-y-3">
            {[
              { name: 'Jan Jansen', type: 'Keuken offerte', date: '2 uur geleden', status: 'Nieuw' },
              { name: 'Piet Pietersen', type: 'Afspraak showroom', date: '4 uur geleden', status: 'Bevestigd' },
              { name: 'Marie de Vries', type: 'Keuken ontwerp', date: '1 dag geleden', status: 'In behandeling' },
            ].map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-600">{lead.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{lead.date}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    lead.status === 'Nieuw' ? 'bg-green-100 text-green-800' :
                    lead.status === 'Bevestigd' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Prestaties</h3>
          <div className="space-y-4">
            {[
              { keyword: 'keukens amsterdam', position: 3, change: '+2' },
              { keyword: 'droomkeukens', position: 1, change: '0' },
              { keyword: 'keuken showroom', position: 5, change: '+1' },
              { keyword: 'keuken ontwerp', position: 8, change: '-1' },
            ].map((keyword, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{keyword}</p>
                  <p className="text-sm text-gray-600">Positie: {keyword.position}</p>
                </div>
                <span className={`text-sm font-medium ${
                  keyword.change.startsWith('+') ? 'text-green-600' :
                  keyword.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {keyword.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO Section Component
function SEOSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">SEO Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Google Search Console</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Gemiddelde positie</span>
              <span className="font-semibold">4.2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Clicks (30 dagen)</span>
              <span className="font-semibold">1,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Impressies</span>
              <span className="font-semibold">45,230</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CTR</span>
              <span className="font-semibold">4.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Keywords</h3>
          <div className="space-y-3">
            {[
              { keyword: 'keukens amsterdam', position: 3, volume: '2.4K' },
              { keyword: 'droomkeukens', position: 1, volume: '1.8K' },
              { keyword: 'keuken showroom', position: 5, volume: '1.2K' },
              { keyword: 'keuken ontwerp', position: 8, volume: '890' },
              { keyword: 'lentjes keukens', position: 2, volume: '650' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{item.keyword}</p>
                  <p className="text-sm text-gray-600">Positie {item.position}</p>
                </div>
                <span className="text-sm text-gray-500">{item.volume}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Issues</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-red-800">Broken Links</p>
                <p className="text-sm text-red-600">3 links gevonden</p>
              </div>
              <span className="text-red-600">⚠️</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-yellow-800">Meta Descriptions</p>
                <p className="text-sm text-yellow-600">5 pagina's missen</p>
              </div>
              <span className="text-yellow-600">⚠️</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800">Page Speed</p>
                <p className="text-sm text-green-600">Optimaal</p>
              </div>
              <span className="text-green-600">✅</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SEA Section Component
function SEASection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">SEA Campagnes</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Google Ads Overzicht</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">€2,847</p>
                <p className="text-sm text-blue-600">Uitgegeven</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">47</p>
                <p className="text-sm text-green-600">Conversies</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Clicks</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Impressies</span>
                <span className="font-semibold">45,230</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">CTR</span>
                <span className="font-semibold">2.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">CPC</span>
                <span className="font-semibold">€2.31</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Actieve Campagnes</h3>
          <div className="space-y-3">
            {[
              { name: 'Keukens Amsterdam', status: 'Actief', budget: '€500/dag', clicks: 234 },
              { name: 'Droomkeukens', status: 'Actief', budget: '€300/dag', clicks: 156 },
              { name: 'Keuken Showroom', status: 'Paused', budget: '€200/dag', clicks: 89 },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{campaign.name}</p>
                  <p className="text-sm text-gray-600">{campaign.budget}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'Actief' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{campaign.clicks} clicks</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Section Component
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Website Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bezoekers Overzicht</h3>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">2,847</p>
              <p className="text-sm text-gray-600">Bezoekers (30 dagen)</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Unieke bezoekers</span>
                <span className="font-semibold">2,123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Paginaweergaven</span>
                <span className="font-semibold">8,456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gem. sessieduur</span>
                <span className="font-semibold">2:34</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pagina's</h3>
          <div className="space-y-3">
            {[
              { page: '/', views: 1,234, bounce: '45%' },
              { page: '/keukens', views: 856, bounce: '38%' },
              { page: '/showroom', views: 654, bounce: '52%' },
              { page: '/contact', views: 432, bounce: '28%' },
              { page: '/over-ons', views: 321, bounce: '41%' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{item.page}</p>
                  <p className="text-sm text-gray-600">{item.views} weergaven</p>
                </div>
                <span className="text-sm text-gray-500">{item.bounce}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Verkeersbronnen</h3>
          <div className="space-y-3">
            {[
              { source: 'Organisch', percentage: 45, color: 'bg-green-500' },
              { source: 'Direct', percentage: 25, color: 'bg-blue-500' },
              { source: 'Google Ads', percentage: 20, color: 'bg-yellow-500' },
              { source: 'Social Media', percentage: 10, color: 'bg-purple-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.source}</span>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Leads Section Component
function LeadsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Aanvragen & Leads</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Overzicht</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">47</p>
                <p className="text-sm text-green-600">Nieuwe leads</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">23</p>
                <p className="text-sm text-blue-600">In behandeling</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-sm text-purple-600">Gekwalificeerd</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Conversieratio</span>
                <span className="font-semibold">3.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gem. lead waarde</span>
                <span className="font-semibold">€2,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Response tijd</span>
                <span className="font-semibold">2.3 uur</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recente Aanvragen</h3>
          <div className="space-y-3">
            {[
              { name: 'Jan Jansen', type: 'Keuken offerte', source: 'Website', status: 'Nieuw', time: '2 uur geleden' },
              { name: 'Piet Pietersen', type: 'Afspraak showroom', source: 'Google Ads', status: 'Bevestigd', time: '4 uur geleden' },
              { name: 'Marie de Vries', type: 'Keuken ontwerp', source: 'SEO', status: 'In behandeling', time: '1 dag geleden' },
              { name: 'Klaas Klaassen', type: 'Keuken renovatie', source: 'Website', status: 'Nieuw', time: '1 dag geleden' },
              { name: 'Anna van der Berg', type: 'Keuken offerte', source: 'Social Media', status: 'Gekwalificeerd', time: '2 dagen geleden' },
            ].map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      lead.status === 'Nieuw' ? 'bg-green-100 text-green-800' :
                      lead.status === 'Bevestigd' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'In behandeling' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{lead.type}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">Via: {lead.source}</span>
                    <span className="text-xs text-gray-500">{lead.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Performance Section Component
function PerformanceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Website Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">PageSpeed Insights</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">92</p>
                <p className="text-sm text-green-600">Desktop</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-600">78</p>
                <p className="text-sm text-yellow-600">Mobile</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">1.2s</p>
                <p className="text-sm text-blue-600">Load Time</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">First Contentful Paint</span>
                <span className="font-semibold">0.8s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Largest Contentful Paint</span>
                <span className="font-semibold">1.2s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cumulative Layout Shift</span>
                <span className="font-semibold">0.05</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technische SEO</h3>
          <div className="space-y-3">
            {[
              { item: 'SSL Certificate', status: 'Valid', score: '100%' },
              { item: 'Mobile Friendly', status: 'Pass', score: '95%' },
              { item: 'Core Web Vitals', status: 'Good', score: '88%' },
              { item: 'Meta Tags', status: 'Complete', score: '100%' },
              { item: 'Schema Markup', status: 'Present', score: '85%' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.item}</p>
                  <p className="text-sm text-gray-600">{item.status}</p>
                </div>
                <span className="text-sm font-semibold text-green-600">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Section Component
function SettingsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Instellingen</h2>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Instellingen</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">E-mail notificaties</p>
              <p className="text-sm text-gray-600">Ontvang dagelijkse rapporten</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-500">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Automatische updates</p>
              <p className="text-sm text-gray-600">Update data elke 6 uur</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Dark mode</p>
              <p className="text-sm text-gray-600">Schakel donkere modus in</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
