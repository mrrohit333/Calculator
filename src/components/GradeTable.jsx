import React from 'react'
import { X } from 'lucide-react'

const GradeTable = ({ onClose }) => {
    const grades = [
        { grade: 'O', range: '90-100', points: '10' },
        { grade: 'A+', range: '80-89', points: '9' },
        { grade: 'A', range: '70-79', points: '8' },
        { grade: 'B+', range: '60-69', points: '7' },
        { grade: 'B', range: '50-59', points: '6' },
        { grade: 'C', range: '40-49', points: '5' },
        { grade: 'P', range: '35-39', points: '4' },
        { grade: 'F', range: '<35', points: '0' },
    ]

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="glass-card modal-content" onClick={e => e.stopPropagation()}>
                <div className="calc-header">
                    <h3>Grade Point Table</h3>
                    <button className="icon-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                <table className="grade-table">
                    <thead>
                        <tr>
                            <th>Letter Grade</th>
                            <th>Marks Range</th>
                            <th>Grade Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map(g => (
                            <tr key={g.grade}>
                                <td><b>{g.grade}</b></td>
                                <td>{g.range}</td>
                                <td><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{g.points}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GradeTable
