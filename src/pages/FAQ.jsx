import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is counselling really confidential?",
      answer: "Yes, absolutely. All counselling sessions are completely confidential within legal and ethical boundaries. Your information will never be shared without your consent, except in cases where there is risk of harm to yourself or others."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by clicking the 'Book Counselling' button on our homepage or through your student dashboard. Select your preferred counsellor, date, and time, then provide a brief reason for your visit."
    },
    {
      question: "What if I need help after hours?",
      answer: "Our 24/7 emergency helpline is always available. Call +254 700 000 000 anytime for immediate support. You can also access our self-help resources and crisis guides on the emergency page."
    },
    {
      question: "Is the service free?",
      answer: "Yes, all counselling services are completely free for Garissa University students. We believe mental health support should be accessible to everyone."
    },
    {
      question: "How long is each session?",
      answer: "Standard counselling sessions are 50 minutes long. You can book follow-up sessions as needed. Some workshops and group sessions may vary in length."
    },
    {
      question: "Can I choose my counsellor?",
      answer: "Yes, you can browse our counsellors' profiles and choose one that you feel comfortable with. You can also request to switch counsellors at any time."
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is an intake session where you'll discuss your concerns with the counsellor, set goals, and determine the best approach for your situation. It's also a chance to see if you feel comfortable with the counsellor."
    },
    {
      question: "Can I get counselling for a friend?",
      answer: "While you can encourage a friend to seek help, counselling is most effective when the individual chooses to participate. You can share our resources with them or contact us for advice on how to support them."
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f8",
      padding: "100px 20px 80px"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "48px"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            borderRadius: "50%",
            color: "white",
            fontSize: "32px"
          }}>
            <FaQuestion />
          </div>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "8px"
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#6b7280"
          }}>
            Find answers to common questions about our counselling services
          </p>
        </div>

        {/* FAQ List */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                border: "1px solid #f3f4f6",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                }}
              >
                <span style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  textAlign: "left"
                }}>
                  {faq.question}
                </span>
                <FaChevronDown style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  transition: "transform 0.3s ease",
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  flexShrink: 0,
                  marginLeft: "16px"
                }} />
              </button>
              
              {openIndex === index && (
                <div style={{
                  padding: "0 24px 20px 24px",
                  borderTop: "1px solid #f3f4f6"
                }}>
                  <p style={{
                    color: "#6b7280",
                    lineHeight: "1.7",
                    fontSize: "15px",
                    marginTop: "16px"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div style={{
          marginTop: "48px",
          background: "linear-gradient(135deg, #eff6ff, #faf5ff)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          border: "1px solid #e5e7eb"
        }}>
          <h3 style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "8px"
          }}>
            Still have questions?
          </h3>
          <p style={{
            color: "#6b7280",
            marginBottom: "16px"
          }}>
            Contact our support team and we'll be happy to help
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 32px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              borderRadius: "9999px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
