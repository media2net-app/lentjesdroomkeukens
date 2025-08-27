'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Search, 
  Users, 
  Eye,
  Globe,
  Settings,
  LogOut,
  Menu,
  X,
  CheckSquare,
  Square,
  Plus,
  Edit,
  Trash2,
  Clock,
  Flag,
  Folder,
  FileText,
  Image as ImageIcon,
  Download,
  Upload
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
    { id: 'tasks', label: 'Taken', icon: CheckSquare },
    { id: 'files', label: 'Bestanden', icon: Folder },
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
      case 'tasks':
        return <TasksSection />;
      case 'files':
        return <FilesSection />;
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
                      : 'text-black hover:bg-yellow-50 hover:text-black'
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
            <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-black hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
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
    { label: 'SEA Clicks', value: '1234', change: '+8.2%', icon: TrendingUp, color: 'bg-yellow-500' },
    { label: 'Nieuwe Aanvragen', value: '47', change: '+15.3%', icon: Users, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Dashboard Overzicht</h2>
        <div className="text-sm text-black">Laatste update: {new Date().toLocaleDateString('nl-NL')}</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">{stat.label}</p>
                  <p className="text-2xl font-bold text-black mt-1">{stat.value}</p>
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
          <h3 className="text-lg font-semibold text-black mb-4">Recente Aanvragen</h3>
          <div className="space-y-3">
            {[
              { name: 'Jan Jansen', type: 'Keuken offerte', date: '2 uur geleden', status: 'Nieuw' },
              { name: 'Piet Pietersen', type: 'Afspraak showroom', date: '4 uur geleden', status: 'Bevestigd' },
              { name: 'Marie de Vries', type: 'Keuken ontwerp', date: '1 dag geleden', status: 'In behandeling' },
            ].map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-black">{lead.name}</p>
                  <p className="text-sm text-black">{lead.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black">{lead.date}</p>
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
          <h3 className="text-lg font-semibold text-black mb-4">SEO Prestaties</h3>
          <div className="space-y-4">
            {[
              { keyword: 'keukens amsterdam', position: 3, change: '+2' },
              { keyword: 'droomkeukens', position: 1, change: '0' },
              { keyword: 'keuken showroom', position: 5, change: '+1' },
              { keyword: 'keuken ontwerp', position: 8, change: '-1' },
            ].map((keyword, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black">{keyword.keyword}</p>
                  <p className="text-sm text-black">Positie: {keyword.position}</p>
                </div>
                <span className={`text-sm font-medium ${
                  keyword.change.startsWith('+') ? 'text-green-600' :
                  keyword.change.startsWith('-') ? 'text-red-600' : 'text-black'
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
      <h2 className="text-2xl font-bold text-black">SEO Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Google Search Console</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-black">Gemiddelde positie</span>
              <span className="font-semibold">4.2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Clicks (30 dagen)</span>
              <span className="font-semibold">1,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Impressies</span>
              <span className="font-semibold">45,230</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">CTR</span>
              <span className="font-semibold">4.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Top Keywords</h3>
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
                  <p className="font-medium text-black">{item.keyword}</p>
                  <p className="text-sm text-black">Positie {item.position}</p>
                </div>
                <span className="text-sm text-black">{item.volume}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">SEO Issues</h3>
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
                <p className="text-sm text-yellow-600">5 pagina&apos;s missen</p>
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
      <h2 className="text-2xl font-bold text-black">SEA Campagnes</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Google Ads Overzicht</h3>
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
                <span className="text-black">Clicks</span>
                <span className="font-semibold">1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Impressies</span>
                <span className="font-semibold">45,230</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">CTR</span>
                <span className="font-semibold">2.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">CPC</span>
                <span className="font-semibold">€2.31</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Actieve Campagnes</h3>
          <div className="space-y-3">
            {[
              { name: 'Keukens Amsterdam', status: 'Actief', budget: '€500/dag', clicks: 234 },
              { name: 'Droomkeukens', status: 'Actief', budget: '€300/dag', clicks: 156 },
              { name: 'Keuken Showroom', status: 'Paused', budget: '€200/dag', clicks: 89 },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-black">{campaign.name}</p>
                  <p className="text-sm text-black">{campaign.budget}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'Actief' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                  <p className="text-sm text-black mt-1">{campaign.clicks} clicks</p>
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
      <h2 className="text-2xl font-bold text-black">Website Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Bezoekers Overzicht</h3>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">2,847</p>
              <p className="text-sm text-black">Bezoekers (30 dagen)</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-black">Unieke bezoekers</span>
                <span className="font-semibold">2,123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Paginaweergaven</span>
                <span className="font-semibold">8,456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Gem. sessieduur</span>
                <span className="font-semibold">2:34</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Top Pagina&apos;s</h3>
          <div className="space-y-3">
            {[
              { page: '/', views: 1234, bounce: '45%' },
              { page: '/keukens', views: 856, bounce: '38%' },
              { page: '/showroom', views: 654, bounce: '52%' },
              { page: '/contact', views: 432, bounce: '28%' },
              { page: '/over-ons', views: 321, bounce: '41%' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-black">{item.page}</p>
                  <p className="text-sm text-black">{item.views} weergaven</p>
                </div>
                <span className="text-sm text-black">{item.bounce}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Verkeersbronnen</h3>
          <div className="space-y-3">
            {[
              { source: 'Organisch', percentage: 45, color: 'bg-green-500' },
              { source: 'Direct', percentage: 25, color: 'bg-blue-500' },
              { source: 'Google Ads', percentage: 20, color: 'bg-yellow-500' },
              { source: 'Social Media', percentage: 10, color: 'bg-purple-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-black">{item.source}</span>
                  <span className="text-sm text-black">{item.percentage}%</span>
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
      <h2 className="text-2xl font-bold text-black">Aanvragen & Leads</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Lead Overzicht</h3>
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
                <span className="text-black">Conversieratio</span>
                <span className="font-semibold">3.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Gem. lead waarde</span>
                <span className="font-semibold">€2,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Response tijd</span>
                <span className="font-semibold">2.3 uur</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Recente Aanvragen</h3>
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
                    <p className="font-medium text-black">{lead.name}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      lead.status === 'Nieuw' ? 'bg-green-100 text-green-800' :
                      lead.status === 'Bevestigd' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'In behandeling' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-sm text-black">{lead.type}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-black">Via: {lead.source}</span>
                    <span className="text-xs text-black">{lead.time}</span>
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
      <h2 className="text-2xl font-bold text-black">Website Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">PageSpeed Insights</h3>
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
                <span className="text-black">First Contentful Paint</span>
                <span className="font-semibold">0.8s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Largest Contentful Paint</span>
                <span className="font-semibold">1.2s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Cumulative Layout Shift</span>
                <span className="font-semibold">0.05</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Technische SEO</h3>
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
                  <p className="font-medium text-black">{item.item}</p>
                  <p className="text-sm text-black">{item.status}</p>
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

// Tasks Section Component
function TasksSection() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'SEO audit uitvoeren',
      description: 'Complete SEO audit van de website uitvoeren en rapport opstellen',
      priority: 'high',
      status: 'pending',
      dueDate: '2025-01-15',
      assignedTo: 'Marketing Team',
      category: 'SEO'
    },
    {
      id: 2,
      title: 'Google Ads campagnes optimaliseren',
      description: 'Bestaande SEA campagnes analyseren en optimaliseren voor betere ROI',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2025-01-20',
      assignedTo: 'SEA Specialist',
      category: 'SEA'
    },
    {
      id: 3,
      title: 'Nieuwe keuken foto&apos;s uploaden',
      description: 'Foto&apos;s van recente keukenprojecten uploaden naar de website',
      priority: 'low',
      status: 'completed',
      dueDate: '2025-01-10',
      assignedTo: 'Content Manager',
      category: 'Content'
    },
    {
      id: 4,
      title: 'Social media content plannen',
      description: 'Content kalender opstellen voor komende maand',
      priority: 'medium',
      status: 'pending',
      dueDate: '2025-01-25',
      assignedTo: 'Social Media Manager',
      category: 'Marketing'
    },
    {
      id: 5,
      title: 'Website performance testen',
      description: 'PageSpeed en Core Web Vitals testen en optimaliseren',
      priority: 'high',
      status: 'pending',
      dueDate: '2025-01-18',
      assignedTo: 'Developer',
      category: 'Technical'
    }
  ]);

  const [showAddTask, setShowAddTask] = useState(false);
  const [filter, setFilter] = useState('all');

  const toggleTaskStatus = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'pending') return task.status === 'pending';
    if (filter === 'in-progress') return task.status === 'in-progress';
    return true;
  });

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const totalTasks = tasks.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Taken Management</h2>
        <button
          onClick={() => setShowAddTask(true)}
          className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Nieuwe Taak
        </button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Totaal</p>
              <p className="text-2xl font-bold text-black">{totalTasks}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <CheckSquare className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Voltooid</p>
              <p className="text-2xl font-bold text-green-600">{completedTasks}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckSquare className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">In Uitvoering</p>
              <p className="text-2xl font-bold text-blue-600">{tasks.filter(t => t.status === 'in-progress').length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Openstaand</p>
              <p className="text-2xl font-bold text-yellow-600">{tasks.filter(t => t.status === 'pending').length}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Square className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Alle Taken
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'pending' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Openstaand
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'in-progress' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            In Uitvoering
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'completed' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Voltooid
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-black">Taken Overzicht</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredTasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className="mt-1"
                  >
                    {task.status === 'completed' ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className={`font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-black'}`}>
                        {task.title}
                      </h4>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? 'Hoog' : task.priority === 'medium' ? 'Gemiddeld' : 'Laag'}
                      </span>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                        {task.status === 'completed' ? 'Voltooid' : task.status === 'in-progress' ? 'In Uitvoering' : 'Openstaand'}
                      </span>
                    </div>
                    <p className={`text-sm ${task.status === 'completed' ? 'text-gray-500' : 'text-black'} mb-2`}>
                      {task.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-black">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Deadline: {new Date(task.dueDate).toLocaleDateString('nl-NL')}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {task.assignedTo}
                      </div>
                      <div className="flex items-center">
                        <Flag className="h-3 w-3 mr-1" />
                        {task.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Files Section Component
function FilesSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const files = [
    {
      id: 1,
      name: 'Keuken_ontwerp_Amsterdam.pdf',
      type: 'pdf',
      size: '2.4 MB',
      category: 'ontwerpen',
      uploadDate: '2025-01-10',
      lastModified: '2025-01-12',
      uploadedBy: 'Jan Lentjes'
    },
    {
      id: 2,
      name: 'Showroom_foto_1.jpg',
      type: 'image',
      size: '1.8 MB',
      category: 'fotos',
      uploadDate: '2025-01-08',
      lastModified: '2025-01-08',
      uploadedBy: 'Marie de Vries'
    },
    {
      id: 3,
      name: 'Keuken_offerte_2025.xlsx',
      type: 'excel',
      size: '856 KB',
      category: 'offertes',
      uploadDate: '2025-01-05',
      lastModified: '2025-01-07',
      uploadedBy: 'Piet Pietersen'
    },
    {
      id: 4,
      name: 'Marketing_brochure.pdf',
      type: 'pdf',
      size: '3.2 MB',
      category: 'marketing',
      uploadDate: '2025-01-03',
      lastModified: '2025-01-03',
      uploadedBy: 'Marketing Team'
    },
    {
      id: 5,
      name: 'Keuken_installatie_handleiding.docx',
      type: 'word',
      size: '1.2 MB',
      category: 'handleidingen',
      uploadDate: '2024-12-28',
      lastModified: '2025-01-02',
      uploadedBy: 'Technisch Team'
    },
    {
      id: 6,
      name: 'Showroom_plattegrond.dwg',
      type: 'cad',
      size: '4.1 MB',
      category: 'ontwerpen',
      uploadDate: '2024-12-20',
      lastModified: '2024-12-25',
      uploadedBy: 'Jan Lentjes'
    },
    {
      id: 7,
      name: 'Klant_feedback_2024.pdf',
      type: 'pdf',
      size: '1.5 MB',
      category: 'feedback',
      uploadDate: '2024-12-15',
      lastModified: '2024-12-15',
      uploadedBy: 'Klantenservice'
    },
    {
      id: 8,
      name: 'Keuken_catalogus_2025.pdf',
      type: 'pdf',
      size: '8.7 MB',
      category: 'catalogi',
      uploadDate: '2024-12-10',
      lastModified: '2024-12-10',
      uploadedBy: 'Marketing Team'
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle bestanden', count: files.length },
    { id: 'ontwerpen', name: 'Ontwerpen', count: files.filter(f => f.category === 'ontwerpen').length },
    { id: 'fotos', name: 'Foto&apos;s', count: files.filter(f => f.category === 'fotos').length },
    { id: 'offertes', name: 'Offertes', count: files.filter(f => f.category === 'offertes').length },
    { id: 'marketing', name: 'Marketing', count: files.filter(f => f.category === 'marketing').length },
    { id: 'handleidingen', name: 'Handleidingen', count: files.filter(f => f.category === 'handleidingen').length },
    { id: 'feedback', name: 'Feedback', count: files.filter(f => f.category === 'feedback').length },
    { id: 'catalogi', name: 'Catalogus', count: files.filter(f => f.category === 'catalogi').length }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-8 w-8 text-red-500" />;
      case 'image': return <ImageIcon className="h-8 w-8 text-green-500" />;
      case 'excel': return <FileText className="h-8 w-8 text-green-600" />;
      case 'word': return <FileText className="h-8 w-8 text-blue-500" />;
      case 'cad': return <FileText className="h-8 w-8 text-purple-500" />;
      default: return <FileText className="h-8 w-8 text-gray-500" />;
    }
  };

  const getFileTypeName = (type: string) => {
    switch (type) {
      case 'pdf': return 'PDF Document';
      case 'image': return 'Afbeelding';
      case 'excel': return 'Excel Bestand';
      case 'word': return 'Word Document';
      case 'cad': return 'CAD Bestand';
      default: return 'Bestand';
    }
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalSize = files.reduce((acc, file) => {
    const size = parseFloat(file.size.replace(' MB', '').replace(' KB', ''));
    const unit = file.size.includes('MB') ? size : size / 1024;
    return acc + unit;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Bestanden Beheer</h2>
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors">
          <Upload size={20} className="mr-2" />
          Bestand Uploaden
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Totaal Bestanden</p>
              <p className="text-2xl font-bold text-black">{files.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Folder className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Totale Grootte</p>
              <p className="text-2xl font-bold text-black">{totalSize.toFixed(1)} MB</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Categorieën</p>
              <p className="text-2xl font-bold text-black">{categories.length - 1}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Folder className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Recent Geüpload</p>
              <p className="text-2xl font-bold text-black">3</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Upload className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zoek bestanden..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-current rounded"></div>
                <div className="w-2 h-2 bg-current rounded"></div>
                <div className="w-2 h-2 bg-current rounded"></div>
                <div className="w-2 h-2 bg-current rounded"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              <div className="space-y-1">
                <div className="w-4 h-1 bg-current rounded"></div>
                <div className="w-4 h-1 bg-current rounded"></div>
                <div className="w-4 h-1 bg-current rounded"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Files Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <div key={file.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {getFileIcon(file.type)}
                </div>
                <h3 className="font-medium text-black mb-2 line-clamp-2">{file.name}</h3>
                <p className="text-sm text-black mb-2">{getFileTypeName(file.type)}</p>
                <p className="text-sm text-black mb-4">{file.size}</p>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-black">Bestanden Overzicht</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredFiles.map((file) => (
              <div key={file.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      {getFileIcon(file.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{file.name}</h4>
                      <p className="text-sm text-black">{getFileTypeName(file.type)} • {file.size}</p>
                      <p className="text-xs text-black">Geüpload door {file.uploadedBy} op {new Date(file.uploadDate).toLocaleDateString('nl-NL')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredFiles.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200 text-center">
          <Folder className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-black mb-2">Geen bestanden gevonden</h3>
          <p className="text-black">Probeer andere zoektermen of filters.</p>
        </div>
      )}
    </div>
  );
}

// Settings Section Component
function SettingsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-black">Instellingen</h2>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-4">Dashboard Instellingen</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-black">E-mail notificaties</p>
              <p className="text-sm text-black">Ontvang dagelijkse rapporten</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-500">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-black">Automatische updates</p>
              <p className="text-sm text-black">Update data elke 6 uur</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-black">Dark mode</p>
              <p className="text-sm text-black">Schakel donkere modus in</p>
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
