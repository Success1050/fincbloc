"use client";

export default function FincBlocArticle() {
  // Easy to add/modify articles and sections
  const sidebarLinks = [
    {
      id: "privacy-policy",
      title: "FincBloc Web3 Privacy Policy",
      isActive: true,
    },
    { id: "wallet-terms", title: "FincBloc Wallet Terms of Use" },
    { id: "xstocks-risk", title: "XSTOCKS RISK DISCLOSURE STATEMENT" },
    {
      id: "unified-trading",
      title: "Terms of Use for Unified Trading Account",
    },
    { id: "uk-warning", title: "Risk warning for the UK users" },
    { id: "risk-disclosure", title: "RISK DISCLOSURE STATEMENT" },
    { id: "terms-of-use", title: "TERMS OF USE" },
    { id: "privacy-notice", title: "Privacy Notice" },
    { id: "earn-service", title: "Biofin Earn Service Agreement" },
    { id: "copy-trading", title: "Biofin Copy Trading Service Agreement" },
  ];

  const contentSections = [
    {
      id: "privacy-policy",
      title: "Web3 Privacy Policy",
      content: [
        'This Web3 Privacy Policy outlines how FincBloc Wallet ("FincBloc Wallet", "we", "us") gathers, utilizes and safeguard your personal information. By accessing, registering, or utilizing FincBloc Wallet ("Services"), you confirm that you possess the legal capacity to agree to this Policy; that you have reviewed and understand the Policy herein and that you accept the described practices.',
        "This Policy details the types of information we gather, the reasons for doing so, its usage and storage methods, potential sharing, your available options and ways to reach us regarding privacy matters. Should you disagree with the handling of your Personal Information as detailed herein in this Policy, please refrain from using our Services.",
        "We may, from time to time, update this Policy periodically to reflect changes in our practices or legal requirements. While we may inform you of such changes using, it is your responsibility to update yourself with such changes by monitoring for any amendments to our policies from time to time. Your continued use of FincBloc Wallet after any updates signifies your acceptance of the revised Policy. If you do not agree with this Policy or any updates to it, please refrain from using the FincBloc Wallet, software, APIs, technologies, products and/or features.",
      ],
    },
    {
      id: "wallet-terms",
      title: "1. FincBloc Wallet's Role and Definitions",
      content: [
        "For the purposes of this Policy:",
        "(a) FincBloc Wallet Platform serves as the data controller responsible for managing your personal information.",
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Help Center
              </a>
              <span className="text-gray-400">{">"}</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Terms
              </a>
              <span className="text-gray-400">{">"}</span>
              <span className="text-gray-600">Terms</span>
            </div>

            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Articles in this section
              </h3>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      link.isActive
                        ? "text-orange-500 font-medium"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {link.title}
                  </button>
                ))}
                <button className="block w-full text-left px-3 py-2 text-sm text-orange-500 hover:text-orange-600 font-medium">
                  See more
                </button>
              </nav>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  FincBloc Web3 Privacy Policy
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>1 month ago</span>
                  <span>·</span>
                  <span>Updated</span>
                </div>
              </div>

              {/* Article Sections */}
              {contentSections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-12 scroll-mt-8"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Reference Link */}
              <p className="text-gray-700 leading-relaxed mb-8">
                Terms referenced here carry the same definitions and
                interpretations as outlined in the FincBloc Wallet Terms of Use,
                available at{" "}
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  FincBloc Wallet Terms of Use
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
