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
  Flag
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
    { label: 'SEA Clicks', value: '1234', change: '+8.2%', icon: TrendingUp, color: 'bg-yellow-500' },
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
                  <p className="font-medium text-gray-900">{keyword.keyword}</p>
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
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">SEO sectie wordt geladen...</p>
      </div>
    </div>
  );
}

// SEA Section Component
function SEASection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">SEA Campagnes</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">SEA sectie wordt geladen...</p>
      </div>
    </div>
  );
}

// Analytics Section Component
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Website Analytics</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">Analytics sectie wordt geladen...</p>
      </div>
    </div>
  );
}

// Leads Section Component
function LeadsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Aanvragen & Leads</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">Leads sectie wordt geladen...</p>
      </div>
    </div>
  );
}

// Performance Section Component
function PerformanceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Website Performance</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">Performance sectie wordt geladen...</p>
      </div>
    </div>
  );
}

// Tasks Section Component
function TasksSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Taken Management</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <p className="text-gray-600">Taken sectie wordt geladen...</p>
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
        <p className="text-gray-600">Instellingen sectie wordt geladen...</p>
      </div>
    </div>
  );
}
