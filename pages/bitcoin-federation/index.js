import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './index.module.css';

const FederationPage = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Bitcoin Indonesia Federation
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Connect and grow with Indonesia's premier Bitcoin network
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.main}>
                {/* Featured Image */}
                <div className={styles.featuredImage}>
                    <img
                        src="/images/bitcoin/btc-meetup.jpg"    // Can replace this with any image
                        alt="Bitcoin Conference"
                    />
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>
                        Join the Federation
                    </h2>
                    <p className={styles.ctaText}>
                        Ready to join? Fill out the registration form, and we'll guide you through the next steps to become part of our federation.
                    </p>
                    <a
                        href="https://x.com/keypleb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Contact @keypleb on X
                        <ArrowUpRight />
                    </a>
                </div>

                {/* Process Section */}
                <div className={styles.processSection}>
                    <h2 className={styles.processTitle}>How to Join</h2>
                    <p className={styles.processDescription}>
                        Joining the Bitcoin Indonesia Federation is quick and easy. Follow these simple steps to become a member today.
                    </p>
                    <div className={styles.processGrid}>
                        <div className={styles.processColumn}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Register</h3>
                                    <p>Click the link below to fill out the registration form and provide your details.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.processColumn}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Connect</h3>
                                    <p>Once registered, our team will reach out to guide you through the next steps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FederationPage;