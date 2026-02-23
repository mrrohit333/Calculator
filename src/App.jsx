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
                <h1 className="title-gradient">SGPA & CGPA Calculator</h1>
                <p className="subtitle">Free Online GPA Calculator with Credit System</p>
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

            <section className="seo-content glass-card">
                <div className="seo-grid">
                    <div className="seo-item">
                        <h3>What is SGPA?</h3>
                        <p>
                            SGPA, or Semester Grade Point Average, is a fundamental metric used in educational institutions to evaluate a student's academic performance within a single semester. It represents the weighted average of the grade points earned in all courses during that particular term. Calculating SGPA is crucial for engineering students and those on a 10-point scale system, as it provides a clear snapshot of their focus and achievement in individual semesters. By using a specialized <strong>sgpa calculator for engineering students</strong>, scholars can easily track their progress and identify areas for improvement. Higher SGPA values indicate better academic standing and are often prerequisites for scholarships or advanced internship opportunities.
                        </p>
                    </div>

                    <div className="seo-item">
                        <h3>What is CGPA?</h3>
                        <p>
                            CGPA stands for Cumulative Grade Point Average and offers a comprehensive view of a student's entire academic journey. Unlike SGPA, which focuses on a single term, CGPA aggregates the grade points from all completed semesters. This metric is the primary standard used by employers and higher education admissions worldwide. Using a <strong>cgpa calculator 10 point scale</strong> helps students understand their overall standing across multiple years of study. It is a vital indicator of consistency and long-term academic excellence. Converting <strong>sgpa to cgpa conversion</strong> is a common requirement for graduation and career planning, making a reliable <strong>semester grade calculator</strong> an essential tool for every modern student.
                        </p>
                    </div>

                    <div className="seo-item">
                        <h3>How to Calculate SGPA?</h3>
                        <div className="formula-box">
                            <p><strong>Formula:</strong> SGPA = Σ(Credits × Grade Points) / Σ(Total Credits)</p>
                            <p>
                                To calculate your SGPA, multiply the credits of each subject by the grade points earned in that subject. Sum these products up and divide by the total number of credits attempted in that semester.
                            </p>
                        </div>
                    </div>

                    <div className="seo-item">
                        <h3>How to Calculate CGPA?</h3>
                        <div className="formula-box">
                            <p><strong>Formula:</strong> CGPA = Σ(Semester Credits × SGPA) / Σ(Total Accumulated Credits)</p>
                            <p>
                                CGPA is determined by taking the weighted average of all your SGPAs. Multiply each semester's SGPA by its total credits, sum them up, and divide by the total credits earned across all semesters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="app-footer">
                <p><b>Version 1.0</b>
                    <br></br>A Product of <b style={{ color: 'blue' }}>MrProducts Pvt Ltd</b>
                    <br></br>Contact: <a href="mailto:mrproducts.pvtltd@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>mrproducts.pvtltd@gmail.com</a></p>
            </footer>
        </div>
    )
}

export default App
