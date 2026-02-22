import React, { useState } from 'react'
import { Plus, Trash2, RefreshCw, Calculator, BookOpen, GraduationCap, Info } from 'lucide-react'
import SGPACalculator from './components/SGPACalculator'
import CGPACalculator from './components/CGPACalculator'
import GradeTable from './components/GradeTable'

function App() {
    const [activeTab, setActiveTab] = useState('sgpa')
    const [showGradeTable, setShowGradeTable] = useState(false)

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all data?')) {
            window.location.reload()
        }
    }

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="title-gradient">GradeMaster</h1>
                <p className="subtitle">CGPA & SGPA Calculator</p>
            </header>

            <div className="controls-row">
                <div className="tab-switcher">
                    <button
                        className={`tab-btn ${activeTab === 'sgpa' ? 'active' : ''}`}
                        onClick={() => setActiveTab('sgpa')}
                    >
                        <BookOpen size={18} />
                        SGPA
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'cgpa' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cgpa')}
                    >
                        <GraduationCap size={18} />
                        CGPA
                    </button>
                </div>

                <div className="action-btns">
                    <button className="icon-btn" onClick={() => setShowGradeTable(!showGradeTable)} title="Grade Points Info">
                        <Info size={20} />
                    </button>
                    <button className="icon-btn reset-btn" onClick={handleReset} title="Reset All">
                        <RefreshCw size={20} />
                    </button>
                </div>
            </div>

            <main className="main-content">
                {showGradeTable && <GradeTable onClose={() => setShowGradeTable(false)} />}

                {activeTab === 'sgpa' ? (
                    <SGPACalculator />
                ) : (
                    <CGPACalculator />
                )}
            </main>

            <footer className="app-footer">
                <p><b>Version 1.0</b>
                <br></br>A Product of <b style={{ color: 'blue' }}>MrProducts Pvt Ltd</b>
            <br></br>Contact: <a href="mailto:mrproducts.pvtltd@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>mrproducts.pvtltd@gmail.com</a></p>
            </footer>
        </div>
    )
}

export default App
