import React, { useState } from 'react';
import { 
  ReactFlow, 
  Node, 
  Edge, 
  Background,
  Controls,
  MiniMap 
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { 
  Network, 
  Zap, 
  CreditCard, 
  Brain, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Database,
  Shield,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfrastructureSection = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const infrastructureLayers = [
    {
      id: 'provider-network',
      icon: Network,
      title: 'Provider Network',
      subtitle: '1000+ verified labs, doctors, pharmacies, home care, and specialised services',
      features: [
        'Quality-assured providers',
        'Nationwide coverage', 
        'Real-time availability',
        'Tier-1 to Tier-3 reach'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'operations',
      icon: Zap,
      title: 'Operations & Automation',
      subtitle: 'SLA-backed routing, fulfilment, escalations, and real-time tracking',
      features: [
        'Automated workflows',
        'Smart routing',
        'SLA monitoring', 
        'Quality assurance'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'financials',
      icon: CreditCard,
      title: 'Financials',
      subtitle: 'Transparent pricing, automated reconciliation, billing, and analytics',
      features: [
        'Unified billing',
        'Real-time analytics',
        'Cost optimisation',
        'Revenue tracking'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-intelligence',
      icon: Brain,
      title: 'AI & Intelligence',
      subtitle: 'Predictive scoring, raw values, and structured health insights',
      features: [
        'Structured data',
        'Quality scoring',
        'Predictive insights',
        'Smart analytics'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const nodes: Node[] = [
    {
      id: '1',
      position: { x: 250, y: 50 },
      data: { 
        label: (
          <div className="flex flex-col items-center p-4">
            <Globe className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-sm font-semibold">One API</span>
          </div>
        )
      },
      type: 'default',
      style: { 
        background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        width: 120,
        height: 80
      }
    },
    {
      id: '2', 
      position: { x: 50, y: 200 },
      data: { 
        label: (
          <div className="flex flex-col items-center p-4">
            <Database className="w-8 h-8 text-purple-500 mb-2" />
            <span className="text-sm font-semibold">One Console</span>
          </div>
        )
      },
      type: 'default',
      style: {
        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', 
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        width: 120,
        height: 80
      }
    },
    {
      id: '3',
      position: { x: 450, y: 200 },
      data: { 
        label: (
          <div className="flex flex-col items-center p-4">
            <Shield className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-sm font-semibold">One Network</span>
          </div>
        )
      },
      type: 'default',
      style: {
        background: 'linear-gradient(135deg, #10b981, #059669)',
        color: 'white', 
        border: 'none',
        borderRadius: '12px',
        width: 120,
        height: 80
      }
    },
    {
      id: '4',
      position: { x: 250, y: 350 },
      data: { 
        label: (
          <div className="flex flex-col items-center p-4">
            <Cpu className="w-8 h-8 text-orange-500 mb-2" />
            <span className="text-sm font-semibold">Connected Care</span>
          </div>
        )
      },
      type: 'default',
      style: {
        background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        color: 'white',
        border: 'none', 
        borderRadius: '12px',
        width: 120,
        height: 80
      }
    }
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#6366f1', strokeWidth: 3 }
    },
    {
      id: 'e1-3', 
      source: '1',
      target: '3',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#06b6d4', strokeWidth: 3 }
    },
    {
      id: 'e2-4',
      source: '2', 
      target: '4',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#10b981', strokeWidth: 3 }
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4', 
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 3 }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Infrastructure Layer for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connected Care
            </span>
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
            One API. One Console. One Network.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A unified infrastructure platform that connects healthcare providers, 
            automates operations, and delivers intelligent insights at scale.
          </p>
        </div>

        {/* Network Flow Visualization - Desktop */}
        <div className="hidden md:block mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="h-96 relative">
              <ReactFlow 
                nodes={nodes}
                edges={edges}
                fitView
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
              >
                <Background color="#f1f5f9" />
              </ReactFlow>
            </div>
          </div>
        </div>

        {/* Mobile Network Cards */}
        <div className="md:hidden mb-16">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, title: 'One API', color: 'from-blue-500 to-cyan-500' },
              { icon: Database, title: 'One Console', color: 'from-purple-500 to-indigo-500' },
              { icon: Shield, title: 'One Network', color: 'from-green-500 to-emerald-500' },
              { icon: Cpu, title: 'Connected Care', color: 'from-orange-500 to-red-500' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Layers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {infrastructureLayers.map((layer) => (
            <div
              key={layer.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                activeLayer === layer.id 
                  ? 'border-blue-500 shadow-2xl scale-105' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
              }`}
              onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${layer.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <layer.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{layer.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{layer.subtitle}</p>

              {/* Features - Expandable */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeLayer === layer.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  {layer.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expand indicator */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-500">
                  {activeLayer === layer.id ? 'Click to collapse' : 'Click to expand'}
                </span>
                <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  activeLayer === layer.id ? 'rotate-90' : 'group-hover:translate-x-1'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Healthcare Infrastructure?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join leading healthcare companies already using our unified platform 
            to deliver seamless care experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;