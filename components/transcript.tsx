'use client'
import React, { useState, useEffect } from 'react';
import styles from './transcript.module.css';

interface Module {
  name: string;
  mark: number;
}

interface TranscriptData {
  modules: Module[];
}

const Transcript: React.FC = () => {
  const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api-for-porfolio-marks.onrender.com/trans', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Debug log
        setTranscriptData(data);
      } catch (err) {
        console.error('Fetch error:', err); // Debug log
        setError(err instanceof Error ? err.message : 'Failed to fetch transcript data');
      } finally {
        setLoading(false);
      }
    };

    fetchTranscript();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading transcript...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!transcriptData || !transcriptData.modules) {
    return <div className={styles.noData}>No transcript data available</div>;
  }

  return (
    <div className={styles.transcript}>
      <h2 className={styles.title}>Academic Transcript</h2>
      <div className={styles.modulesList}>
        {transcriptData.modules.map((module, index) => (
          <div key={index} className={styles.moduleItem}>
            <span className={styles.moduleName}>{module.name}</span>
            <span className={styles.moduleMark}>{module.mark}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
