import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import GroupsIcon from "@mui/icons-material/Groups";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";

import { PageTransition } from "../components/PageTransition";
import { PageBanner } from "../components/PageBanner";
import { initiativesData } from "../data/foundationData";

export const Initiatives = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Anbu Scholarship");

  const categories = [
    "Anbu Scholarship",
    "Inclusive Education",
    "School Supporting Programs",
    "Rural Development",
    "Joy of Giving",
    "Skill Development",
  ];

  const filteredInitiatives = initiativesData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <PageTransition>
      <PageBanner
        title="Initiatives That Create Lasting Impact"
        subtitle="Discover structured institutional programs designed to encourage learning, foster technical capabilities, and drive compassionate community welfare."
        badge="Our Action Tracks"
        breadcrumbCurrent="Initiatives"
      />

      <Box sx={{ backgroundColor: "#faf6ef", py: { xs: 6, md: 8 }, borderBottom: "1px solid rgba(8, 1, 49, 0.1)" }}>
        <Container maxWidth="xl">
          {/* Section Heading */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#002c62",
                mb: 0.8,
              }}
            >
              Programs Portfolio
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: "#080131",
                fontSize: { xs: "1.5rem", md: "2rem" },
                lineHeight: 1.3,
              }}
            >
              Comprehensive Community Programs
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid rgba(8, 1, 49, 0.08)",
              boxShadow: "0 8px 40px rgba(8, 1, 49, 0.07)",
              overflow: "hidden",
            }}
          >
            {/* LEFT SIDEBAR */}
            <Box
              sx={{
                width: { xs: "100%", md: "270px" },
                flexShrink: 0,
                position: { md: "sticky" },
                top: { md: "80px" },
                alignSelf: { md: "flex-start" },
                borderRight: { md: "1.5px solid rgba(8, 1, 49, 0.08)" },
                borderBottom: { xs: "1.5px solid rgba(8, 1, 49, 0.08)", md: "none" },
              }}
            >
              <Box sx={{ backgroundColor: "#002c62", px: 3, py: 3 }}>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", mb: 0.5 }}>
                  Browse Programs
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.1rem" }}>
                  Our Initiatives
                </Typography>
              </Box>

              <Box>
                {categories.map((cat, index) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <Box
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 3,
                        py: 2.2,
                        cursor: "pointer",
                        backgroundColor: isSelected ? "rgba(0,44,98,0.07)" : "transparent",
                        borderLeft: isSelected ? "4px solid #002c62" : "4px solid transparent",
                        borderBottom: index < categories.length - 1 ? "1px solid rgba(8,1,49,0.06)" : "none",
                        transition: "all 0.18s ease",
                        "&:hover": {
                          backgroundColor: isSelected ? "rgba(0,44,98,0.07)" : "rgba(0,44,98,0.03)",
                          borderLeftColor: isSelected ? "#002c62" : "rgba(0,44,98,0.25)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: "0.9rem",
                          color: isSelected ? "#002c62" : "#4a4a4a",
                          lineHeight: 1.45,
                          flex: 1,
                          pr: 1,
                        }}
                      >
                        {cat}
                      </Typography>
                      {isSelected && (
                        <Box sx={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "#002c62", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <CheckIcon sx={{ color: "#FFFFFF", fontSize: "0.8rem" }} />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>

              <Box sx={{ px: 3, py: 2.5, backgroundColor: "#f7f3ec", borderTop: "1px solid rgba(8,1,49,0.07)" }}>
                <Typography sx={{ fontSize: "0.78rem", color: "#888", lineHeight: 1.5 }}>
                  Click a program to explore its details and impact.
                </Typography>
              </Box>
            </Box>

            {/* RIGHT CONTENT */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {filteredInitiatives.length === 0 ? (
                <Box sx={{ p: 6, textAlign: "center" }}>
                  <Typography sx={{ color: "#888", fontSize: "1rem" }}>No content available for this program yet.</Typography>
                </Box>
              ) : (
                filteredInitiatives.map((item) => (
                  <Box key={item.id} id={item.id}>
                    {/* Title Bar */}
                    <Box sx={{ px: { xs: 3, md: 5 }, py: 3, borderBottom: "1.5px solid rgba(8,1,49,0.08)", display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", backgroundColor: "#FDFCFA" }}>
                      <Typography component="h2" sx={{ fontWeight: 700, color: "#080131", fontSize: { xs: "1.25rem", md: "1.55rem" }, lineHeight: 1.3 }}>
                        {item.title}
                      </Typography>
                    </Box>

                    {/* Image + Text */}
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
                      {/* Left: Image + Activities stacked */}
                      <Box sx={{ width: { xs: "100%", lg: "38%" }, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: { lg: "1px solid rgba(8,1,49,0.06)" } }}>
                        <Box sx={{ height: { xs: 180, lg: 260 }, overflow: "hidden", flexShrink: 0 }}>
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          />
                        </Box>
                        {/* Activities below image */}
                        {item.activities && item.activities.length > 0 && (
                          <Box sx={{ px: 3, py: 3, backgroundColor: "#f4f4f2", flex: 1, borderTop: "1.5px solid rgba(8,1,49,0.08)" }}>
                            <Typography sx={{ fontWeight: 700, color: "#080131", mb: 2, fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              Key Operational Activities
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                              {item.activities.map((act, idx) => (
                                <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, p: 1.5, backgroundColor: "#002c62", borderRadius: "6px" }}>
                                  <CheckCircleIcon sx={{ color: "#FFFFFF", fontSize: 15, mt: 0.3, flexShrink: 0 }} />
                                  <Typography sx={{ color: "#FFFFFF", fontSize: "0.82rem", opacity: 0.95, lineHeight: 1.55 }}>
                                    {act}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        )}
                      </Box>

                      {/* Right: Text Details */}
                      <Box sx={{ flex: 1, px: { xs: 3, md: 5 }, py: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", borderTop: { xs: "1px solid rgba(8,1,49,0.06)", lg: "none" } }}>
                        {item.tagline && (
                          <Box sx={{ borderLeft: "4px solid #002c62", pl: 2.5, py: 1, mb: 3, backgroundColor: "#faf6ef" }}>
                            <Typography sx={{ color: "#002c62", fontWeight: 700, fontStyle: "italic", lineHeight: 1.6, fontSize: { xs: "0.93rem", md: "1.03rem" } }}>
                              "{item.tagline}"
                            </Typography>
                          </Box>
                        )}
                        <Typography sx={{ color: "#333", lineHeight: 1.88, mb: 3, fontSize: { xs: "0.92rem", md: "0.98rem" }, whiteSpace: "pre-line", flex: 1 }}>
                          {item.fullDesc || item.shortDesc}
                        </Typography>
                        {item.beneficiaries && (
                          <Box sx={{ p: 2.5, backgroundColor: "#002c62", mb: 3 }}>
                            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.09em", mb: 0.8 }}>
                              Beneficiary Focus
                            </Typography>
                            <Typography sx={{ color: "#FFFFFF", fontSize: "0.9rem", lineHeight: 1.65, fontWeight: 500 }}>
                              {item.beneficiaries}
                            </Typography>
                          </Box>
                        )}
                        {item.videoUrl && (
                          <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                              <PlayCircleIcon sx={{ color: "#002c62", fontSize: "1rem" }} />
                              <Typography sx={{ color: "#002c62", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                                Documentary Feature
                              </Typography>
                            </Box>
                            <Box sx={{ position: "relative", width: "100%", paddingTop: "52%", backgroundColor: "#000", overflow: "hidden" }}>
                              <Box
                                component="iframe"
                                src={`https://www.youtube.com/embed/${item.videoUrl.split("v=")[1]?.split("&")[0]}`}
                                title="Documentary"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                              />
                            </Box>
                          </Box>
                        )}
                        <Box sx={{ pt: 2, borderTop: "1px solid rgba(8,1,49,0.08)", display: "flex", justifyContent: "flex-end" }}>
                          <Box
                            component="span"
                            onClick={() => navigate("/admission")}
                            sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "#002c62", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", transition: "gap 0.2s ease", "&:hover": { gap: 1.5 } }}
                          >
                            <span>Apply / Participate</span>
                            <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* GET INVOLVED */}
      <Box sx={{ backgroundColor: "#faf6ef", py: { xs: 8, md: 12 }, borderBottom: "1px solid rgba(8,1,49,0.1)" }}>
        <Container maxWidth="lg">
          <Card sx={{ backgroundColor: "#FFFFFF", borderRadius: 0, p: { xs: 3, md: 5 }, border: "1.5px solid rgba(8,1,49,0.08)", boxShadow: "0 8px 30px rgba(8,1,49,0.08)", textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "1.3rem", md: "1.6rem" }, color: "#080131", mb: 1.5 }}>
              Get Involved with Anbu Initiatives
            </Typography>
            <Typography sx={{ color: "#555", fontSize: { xs: "0.88rem", md: "0.95rem" }, maxWidth: 620, mx: "auto", lineHeight: 1.75, mb: 3.5 }}>
              Are you passionate about volunteering your academic skills, adopting a government school classroom, or partnering with our rural vocational drives? Connect with our project leads today.
            </Typography>
            <Button
              size="medium"
              onClick={() => navigate("/contact")}
              endIcon={<ArrowForwardIcon />}
              sx={{ backgroundColor: "#002c62", color: "#FFFFFF", px: 3.5, py: 1.2, fontSize: "0.88rem", fontWeight: 700, borderRadius: 0, "&:hover": { backgroundColor: "#001c40" } }}
            >
              Volunteer or Partner With Us
            </Button>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
