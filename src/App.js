import React, { useState, useEffect } from "react";
import {
  Truck,
  Calendar,
  Shield,
  CheckCircle,
  Info,
  ChevronRight,
  MapPin,
  Package,
  CreditCard,
} from "lucide-react";

const App = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [currentStep, setCurrentStep] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch actual data from API
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("THE DATA >> ", data[0]);
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skips:", err);
        setError("Failed to load skip options");
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #EBF8FF, #E0E7FF)",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    header: {
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    headerContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111",
      margin: 0,
    },
    progressBar: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    },
    progressContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      overflowX: "auto",
    },
    stepContainer: {
      display: "flex",
      alignItems: "center",
    },
    stepLine: {
      width: "32px",
      height: "2px",
      backgroundColor: "#e5e7eb",
      marginRight: "8px",
    },
    stepLineActive: {
      backgroundColor: "#6366f1",
    },
    stepCircle: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e5e7eb",
      transition: "all 0.3s",
    },
    stepCircleActive: {
      backgroundColor: "#6366f1",
    },
    stepCircleCompleted: {
      backgroundColor: "#10b981",
    },
    mainContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "32px 24px",
    },
    pageTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#111",
      marginBottom: "8px",
      textAlign: "center",
    },
    pageSubtitle: {
      fontSize: "18px",
      color: "#6b7280",
      textAlign: "center",
      marginBottom: "32px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s",
      cursor: "pointer",
      overflow: "hidden",
      position: "relative",
    },
    cardHover: {
      boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
      transform: "scale(1.02)",
    },
    cardSelected: {
      boxShadow: "0 0 0 4px #6366f1",
      transform: "scale(1.05)",
    },
    selectedBadge: {
      position: "absolute",
      top: "16px",
      right: "16px",
      backgroundColor: "#6366f1",
      color: "#fff",
      padding: "4px 12px",
      borderRadius: "9999px",
      fontSize: "14px",
      fontWeight: "500",
    },
    cardContent: {
      padding: "24px",
    },
    skipTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111",
      marginBottom: "4px",
    },
    skipDescription: {
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "16px",
    },
    skipVisual: {
      height: "128px",
      background: "linear-gradient(to bottom right, #fbbf24, #f59e0b)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginBottom: "24px",
    },
    skipSize: {
      position: "absolute",
      top: "8px",
      right: "8px",
      backgroundColor: "#fff",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#374151",
    },
    infoRow: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "12px",
    },
    icon: {
      marginRight: "8px",
      flexShrink: 0,
    },
    priceSection: {
      borderTop: "1px solid #e5e7eb",
      paddingTop: "16px",
      marginTop: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    priceLabel: {
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "4px",
    },
    price: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#6366f1",
    },
    selectButton: {
      padding: "8px 16px",
      backgroundColor: "#6366f1",
      color: "#fff",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: "500",
      transition: "background-color 0.3s",
    },
    infoBox: {
      backgroundColor: "#dbeafe",
      border: "1px solid #93c5fd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "32px",
      display: "flex",
      alignItems: "flex-start",
    },
    infoText: {
      fontSize: "14px",
      color: "#1e40af",
      marginLeft: "12px",
    },
    bottomNav: {
      position: "sticky",
      bottom: 0,
      backgroundColor: "#fff",
      borderTop: "1px solid #e5e7eb",
      padding: "16px 0",
    },
    bottomNavContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navButtons: {
      display: "flex",
      gap: "16px",
    },
    backButton: {
      padding: "10px 24px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      backgroundColor: "#fff",
      color: "#374151",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      transition: "background-color 0.3s",
    },
    continueButton: {
      padding: "10px 24px",
      backgroundColor: "#6366f1",
      color: "#fff",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "500",
      transition: "opacity 0.3s",
    },
    continueButtonDisabled: {
      backgroundColor: "#d1d5db",
      color: "#6b7280",
      cursor: "not-allowed",
    },
    loadingContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, #EBF8FF, #E0E7FF)",
    },
    spinner: {
      width: "48px",
      height: "48px",
      border: "4px solid #e5e7eb",
      borderTop: "4px solid #6366f1",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
  };

  const calculateVAT = (price, vatRate) => {
    return Math.round(price * (vatRate / 100));
  };

  const getTotalPrice = (skip) => {
    return (
      skip.price_before_vat + calculateVAT(skip.price_before_vat, skip.vat)
    );
  };

  const getSkipCapacity = (size) => {
    const capacities = {
      4: "35-45 bin bags",
      6: "55-65 bin bags",
      8: "75-85 bin bags",
      10: "95-105 bin bags",
      12: "115-125 bin bags",
      14: "135-145 bin bags",
      16: "155-165 bin bags",
      20: "195-205 bin bags",
      40: "395-405 bin bags",
    };
    return capacities[size] || `${size * 10} bin bags`;
  };

  const getSkipDescription = (size) => {
    const descriptions = {
      4: "Perfect for small home renovations",
      6: "Ideal for bathroom or kitchen refits",
      8: "Great for medium home clearances",
      10: "Suitable for large construction projects",
      12: "Perfect for major renovations",
      14: "Ideal for commercial clearances",
      16: "Great for industrial waste",
      20: "Perfect for large scale demolition",
      40: "Maximum capacity for major projects",
    };
    return descriptions[size] || "Standard skip size";
  };

  const steps = [
    { number: 1, label: "Postcode", icon: MapPin, completed: true },
    { number: 2, label: "Waste Type", icon: Package, completed: true },
    { number: 3, label: "Select Skip", icon: Truck, active: true },
    { number: 4, label: "Permit Check", icon: Shield, completed: false },
    { number: 5, label: "Choose Date", icon: Calendar, completed: false },
    { number: 6, label: "Payment", icon: CreditCard, completed: false },
  ];

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log("Moving to Permit Check step");
    }
  };

  const handleBack = () => {
    console.log("Going back to Waste Type step");
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={{ textAlign: "center" }}>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <div style={styles.spinner}></div>
          <p style={{ marginTop: "16px", color: "#6b7280" }}>
            Loading skip options...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.loadingContainer}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#ef4444" }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Skip Hire Service</h1>
          <div style={{ fontSize: "14px", color: "#6b7280" }}>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div style={styles.progressBar}>
        <div style={styles.progressContent}>
          {steps.map((step, index) => (
            <div key={step.number} style={styles.stepContainer}>
              {index !== 0 && (
                <div
                  style={{
                    ...styles.stepLine,
                    ...(step.completed || step.active
                      ? styles.stepLineActive
                      : {}),
                  }}
                ></div>
              )}
              <div
                style={{
                  ...styles.stepCircle,
                  ...(step.completed ? styles.stepCircleCompleted : {}),
                  ...(step.active ? styles.stepCircleActive : {}),
                }}
              >
                {step.completed ? (
                  <CheckCircle size={24} color="#fff" />
                ) : (
                  <step.icon size={20} color="#fff" />
                )}
              </div>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: step.active
                    ? "#6366f1"
                    : step.completed
                    ? "#10b981"
                    : "#6b7280",
                  display: window.innerWidth > 768 ? "inline" : "none",
                }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h2 style={styles.pageTitle}>Choose Your Skip Size</h2>
        <p style={styles.pageSubtitle}>
          Select the skip size that best suits your needs
        </p>

        {/* Skip Grid */}
        <div style={styles.grid}>
          {skips.slice(0, 6).map((skip) => {
            const isSelected = selectedSkip?.id === skip.id;
            return (
              <div
                key={skip.id}
                onClick={() => handleSkipSelect(skip)}
                style={{
                  ...styles.card,
                  ...(isSelected ? styles.cardSelected : {}),
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    Object.assign(e.currentTarget.style, styles.cardHover);
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(0,0,0,0.1)";
                  }
                }}
              >
                {isSelected && <div style={styles.selectedBadge}>Selected</div>}

                <div style={styles.cardContent}>
                  <div>
                    <h3 style={styles.skipTitle}>{skip.size} Yard Skip</h3>
                    <p style={styles.skipDescription}>
                      {getSkipDescription(skip.size)}
                    </p>
                  </div>

                  <div style={styles.skipVisual}>
                    <Truck size={64} color="#fff" />
                    <div style={styles.skipSize}>{skip.size}yd³</div>
                  </div>

                  <div>
                    <div style={styles.infoRow}>
                      <Package size={16} color="#9ca3af" style={styles.icon} />
                      <span>Capacity: {getSkipCapacity(skip.size)}</span>
                    </div>
                    <div style={styles.infoRow}>
                      <Calendar size={16} color="#9ca3af" style={styles.icon} />
                      <span>{skip.hire_period_days} day hire period</span>
                    </div>
                    {skip.allowed_on_road ? (
                      <div style={styles.infoRow}>
                        <Shield size={16} color="#10b981" style={styles.icon} />
                        <span style={{ color: "#10b981" }}>
                          Road permit available
                        </span>
                      </div>
                    ) : (
                      <div style={styles.infoRow}>
                        <Shield size={16} color="red" style={styles.icon} />
                        <span style={{ color: "red" }}>
                          Not allowed on the road
                        </span>
                      </div>
                    )}
                  </div>

                  <div style={styles.priceSection}>
                    <div>
                      <p style={styles.priceLabel}>Total price</p>
                      <p style={styles.price}>£{getTotalPrice(skip)}</p>
                      <p style={{ fontSize: "12px", color: "#6b7280" }}>
                        +{skip.vat}% VAT
                      </p>
                    </div>
                    <button
                      style={styles.selectButton}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#4f46e5")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#6366f1")
                      }
                    >
                      Select
                      <ChevronRight size={16} style={{ marginLeft: "4px" }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more skips if available */}
        {skips.length > 6 && (
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <button
              style={{
                color: "#6366f1",
                fontWeight: "500",
                display: "inline-flex",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View larger skip sizes ({skips.length - 6} more)
              <ChevronRight size={16} style={{ marginLeft: "4px" }} />
            </button>
          </div>
        )}

        {/* Info Section */}
        <div style={styles.infoBox}>
          <Info size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
          <div style={styles.infoText}>
            <p style={{ fontWeight: "500", marginBottom: "4px" }}>
              Important Information
            </p>
            <p>
              Imagery and information shown may not reflect the exact shape or
              size specification. Colours may vary, options and/or accessories
              may be featured at additional cost.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <div style={styles.bottomNavContent}>
          <div>
            {selectedSkip && (
              <div>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>Selected:</p>
                <p style={{ fontWeight: "500" }}>
                  {selectedSkip.size} Yard Skip - £{getTotalPrice(selectedSkip)}
                </p>
              </div>
            )}
          </div>
          <div style={styles.navButtons}>
            <button
              onClick={handleBack}
              style={styles.backButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9fafb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!selectedSkip}
              style={{
                ...styles.continueButton,
                ...(selectedSkip ? {} : styles.continueButtonDisabled),
              }}
            >
              Continue
              <ChevronRight size={20} style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
