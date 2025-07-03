document.addEventListener('DOMContentLoaded', () => {

    const appData = {
        stats: {
            tam: 799.6,
            segment: 50000,
            aov: 145
        },
        painPoints: [
            { label: 'Capital & Funding', value: 22, detail: "'I feel un-investable. I don\\'t know how to become someone people trust with money.'" },
            { label: 'Experience Gaps', value: 19, detail: "'I feel like an imposter. My success in my career doesn\\'t count here, and I\\'ll look foolish.'" },
            { label: 'Market Conditions', value: 18, detail: "'The rules have changed and the \\'gurus\\' are still using an old playbook. I don\\'t trust their advice.'" },
            { label: 'Trust Deficit', value: 14, detail: "'I\\'ve been burned by the \\'honest\\' ones. Who can I possibly trust now?'" },
            { label: 'Competition Overwhelm', value: 10, detail: "'I can\\'t quit my job, so how can I compete with people who do this full-time?'" },
            { label: 'Analysis Paralysis', value: 9, detail: "'I\\'m terrified of making a catastrophic mistake that will set my family back years.'" },
            { label: 'Personal Stress', value: 6, detail: "'This is straining my marriage and my mental health. The uncertainty is crushing.'" },
            { label: 'Operational Challenges', value: 5, detail: "'I want the asset, not the tenants and toilets. I fear creating a new, worse job for myself.'" }
        ],
        competitors: [
            { feature: 'Capital Access', avg: 1, ours: 5, detail: "Competitors offer vague, theoretical advice. We will provide a systematic 'Fundability Framework' and direct access to a capital network." },
            { feature: 'Risk Sharing', avg: 1, ours: 5, detail: "No competitors share risk. Our 'Confidence & Credibility' guarantee aligns our success with the student's, a powerful differentiator." },
            { feature: 'Guarantee Strength', avg: 2, ours: 5, detail: "Most guarantees are simple money-back offers. Ours guarantees competence and provides 1-on-1 expert review, a much higher value promise." },
            { feature: 'Outcome Timeline', avg: 2, ours: 5, detail: "Competitors promise results in 12+ months. Our accelerated 6-month timeline is a major draw for ambitious professionals." }
        ],
        beliefLadder: [
            { rung: 1, title: 'The Capital Barrier', oldBelief: "'I need $500K+ cash to be a player.'", newBelief: "'I can control institutional-quality assets by first making *myself* fundable, then leveraging a proven system.'" },
            { rung: 2, title: 'The Market Barrier', oldBelief: "'The market is too tough for beginners right now.'", newBelief: "'Challenging markets create the best opportunities for investors with the right strategy and capital partners.'" },
            { rung: 3, title: 'The Competence Barrier', oldBelief: "'I'll fail because I don't have a finance degree.'", newBelief: "'My analytical mind is a superpower when paired with a systematic deal-evaluation framework.'" },
            { rung: 4, title: 'The Trust Barrier', oldBelief: "'Every educator is just selling a course.'", newBelief: "'A true accelerator guarantees my competence and provides expert validation, aligning their success with mine.'" }
        ],
        dealOS: [
            { title: 'Fundability Framework™', goal: 'Make the student investable *before* they look for deals.', process: 'Students complete a "Fundability Scorecard," build a personal credibility deck, and learn to structure deals that attract capital. This module solves the #1 pain point head-on.' },
            { title: 'Deal Flow Engine™', goal: 'Generate a consistent pipeline of qualified opportunities.', process: 'A system for building a "Broker Alliance," teaching students how to become a top broker\'s first call. This is supplemented with access to your network\'s off-market deal flow.' },
            { title: 'Red Flag Framework™', goal: 'Eliminate analysis paralysis and mitigate risk.', process: 'A systematic, checklist-driven due diligence and underwriting process. It uses a go/no-go scoring system that forces a decision within a set timeframe, preventing endless analysis.' }
        ],
        guaranteeExamples: [
            { title: "Part 1: The 1-on-1 Deal Review", scenario: "You complete the Accelerator but still feel hesitant about your first offer. You're worried you've missed something in your analysis.", solution: "You invoke the guarantee. You schedule a private 1-on-1 session with Curtis to review your deal. He'll go through your underwriting line-by-line, pressure-test your assumptions, and give you the clear 'go' or 'no-go' decision with his expert reasoning. You leave with absolute clarity and confidence." },
            { title: "Part 2: The 'Blueprint-Backed' Credibility Seal", scenario: "You're ready to make an offer, but you're concerned brokers won't take you seriously as a new investor.", solution: "Because your offer was built using the Deal OS and reviewed by Curtis, you can submit it with the 'Blueprint-Backed' seal. This tells brokers and sellers that your offer has been vetted by an experienced professional, giving you instant credibility and a higher likelihood of being accepted." }
        ],
        contentPillars: [
            { title: 'First-Deal Frameworks (40%)', purpose: 'Builds authority by teaching core, step-by-step processes. Directly addresses the "Knowledge Gap" pain point.', examples: ['5 Steps to Buying Your First Commercial Property (Beginner\'s Guide)', 'How to Analyze a Commercial Deal in Under 30 Minutes', 'The Ultimate Due Diligence Checklist for Your First Property'] },
            { title: 'Real Deal Reveals (25%)', purpose: 'Builds trust through radical transparency. Showcasing actual deals (wins and losses) proves you are a practitioner, not a performer.', examples: ['How I Made $120K on One Vacancy: A Complete Deal Breakdown', 'My $50,000 Mistake: The Worst Deal I Ever Did & The Lesson It Taught Me', 'From Start to Finish: The True Story of My First 12-Unit Building'] },
            { title: 'Capital & Funding Mastery (15%)', purpose: 'Directly targets the #1 pain point. This content attracts the most motivated prospects.', examples: ['3 Ways to Fund Your First Deal When Banks Say No', 'How to Raise Private Money for CRE (Without Feeling Like a Salesman)', 'The Truth About How Much Money You REALLY Need'] },
            { title: 'Market Hot-Takes & Myth Busting (10%)', purpose: 'Drives engagement and shareability by providing timely, opinionated commentary that counters common (and often wrong) advice.', examples: ['Why the "CRE Crash" is a Lie (And Where the Real Opportunity Is)', 'The Cap Rate Myth That Costs Beginners Millions', 'Yes, Rates are 7%. Here\'s How to Cash Flow Anyway.'] },
            { title: 'Lifestyle & Mindset (10%)', purpose: 'Humanizes the brand and makes you relatable. This content addresses the "Personal Stress" pain point.', examples: ['How I Manage a $50M Portfolio in 5 Hours a Week', 'The Mindset Shift from W-2 Employee to Real Estate Investor', 'From Analysis Paralysis to Your First Offer: A Mental Framework'] }
        ],
        newFunnel: {
            prices: { 
                fe: 37, 
                bump1: 17, 
                bump2: 22, 
                upsell1: 97, 
                upsell2: 197, 
                accelerator: 4995 
            },
            defaults: { 
                traffic: 1000, 
                fe_cvr: 4, 
                bump1_take: 30, 
                bump2_take: 25, 
                upsell1_cvr: 10, 
                upsell2_cvr: 15, 
                accelerator_cvr: 5 
            }
        }
    };

    const navLinks = document.querySelectorAll('#main-nav a');
    const contentSections = document.querySelectorAll('.content-section');

    function navigate(hash) {
        if (!hash) hash = '#dashboard';
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.hash === hash);
        });

        contentSections.forEach(section => {
            section.classList.toggle('active', `#${section.id}` === hash);
        });

        if (hash === '#dashboard') animateStats();
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = e.currentTarget.hash;
            window.location.hash = hash;
            navigate(hash);
        });
    });

    function animateValue(obj, start, end, duration, isFloat = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let value = progress * (end - start) + start;
            if (isFloat) {
                obj.innerHTML = `$${value.toFixed(1)}M`;
            } else if (end > 1000) {
                 obj.innerHTML = `${Math.floor(value).toLocaleString()}`;
            } else {
                 obj.innerHTML = `$${Math.floor(value)}M+`;
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function animateValueAOV(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let value = progress * (end - start) + start;
            obj.innerHTML = `$${Math.floor(value)}`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    function animateStats(){
        const tam = document.getElementById('stat-tam');
        const segment = document.getElementById('stat-segment');
        const aov = document.getElementById('stat-aov');
        
        animateValue(tam, 0, appData.stats.tam, 1500, true);
        animateValue(segment, 0, appData.stats.segment, 1500);
        animateValueAOV(aov, 0, appData.stats.aov, 1500);
    }

    function renderPainPointChart() {
        const ctx = document.getElementById('painPointChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: appData.painPoints.map(p => p.label),
                datasets: [{
                    label: 'Pain Point Frequency',
                    data: appData.painPoints.map(p => p.value),
                    backgroundColor: [
                        '#1e3a8a', '#1e40af', '#1d4ed8', '#2563eb', 
                        '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { size: 12 },
                            color: '#475569',
                            boxWidth: 15,
                            padding: 15,
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += context.parsed + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                cutout: '50%',
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const i = elements[0].index;
                        const detail = appData.painPoints[i].detail;
                        document.getElementById('painPointDetail').innerHTML = `<p class="text-slate-700 font-semibold italic">"${detail}"</p>`;
                    }
                }
            }
        });
    }
    
    function renderCompetitorAnalysis() {
        const buttonsContainer = document.getElementById('competitor-buttons');
        const detailCard = document.getElementById('competitor-detail-card');

        buttonsContainer.innerHTML = appData.competitors.map((item, index) => `
            <button class="comp-btn border-2 border-slate-300 text-slate-600 font-semibold py-2 px-4 rounded-lg text-sm" data-index="${index}">
                ${item.feature}
            </button>
        `).join('');

        buttonsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('comp-btn')) {
                const allBtns = buttonsContainer.querySelectorAll('.comp-btn');
                allBtns.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                const index = e.target.dataset.index;
                const data = appData.competitors[index];

                detailCard.innerHTML = `
                    <div class="fade-in">
                        <h3 class="font-bold text-xl text-slate-800 mb-3">${data.feature}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                                <h4 class="font-bold text-red-800">Industry Standard (Avg. Score: ${data.avg}/5)</h4>
                                <p class="text-sm text-red-700 mt-1">${data.avg < 3 ? 'Generally weak and theoretical.' : 'Moderately addressed but lacks depth.'}</p>
                            </div>
                            <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <h4 class="font-bold text-green-800">Our Opportunity (Target Score: ${data.ours}/5)</h4>
                                <p class="text-sm text-green-700 mt-1">${data.detail}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    }

    function renderBeliefLadder() {
        const ladderContainer = document.getElementById('belief-ladder');
        ladderContainer.innerHTML = appData.beliefLadder.map((item, index) => `
            <div class="belief-rung p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 hover:border-blue-500" data-index="${index}">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-slate-800">${item.rung}. ${item.title}</h4>
                    <svg class="w-5 h-5 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div class="belief-detail hidden mt-3 pt-3 border-t border-slate-200">
                    <p class="text-sm text-red-600 mb-2"><strong class="font-semibold">Old Belief:</strong> ${item.oldBelief}</p>
                    <p class="text-sm text-green-600"><strong class="font-semibold">New Belief:</strong> ${item.newBelief}</p>
                </div>
            </div>
        `).join('');

        ladderContainer.addEventListener('click', (e) => {
            const rung = e.target.closest('.belief-rung');
            if (rung) {
                rung.querySelector('.belief-detail').classList.toggle('hidden');
                rung.querySelector('svg').classList.toggle('rotate-180');
            }
        });
    }

    function renderDealOS() {
        const container = document.getElementById('deal-os');
        container.innerHTML = appData.dealOS.map(item => `
            <div class="os-module p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h3 class="font-bold text-lg text-blue-800 mb-2">${item.title}</h3>
                <p class="font-semibold text-slate-600 text-sm mb-2">${item.goal}</p>
                <p class="text-slate-500 text-sm">${item.process}</p>
            </div>
        `).join('');
    }
    
    function renderGuaranteeExamples() {
        const container = document.getElementById('guarantee-examples');
        container.innerHTML = appData.guaranteeExamples.map(item => `
             <div class="guarantee-example bg-blue-700 p-4 rounded-lg">
                <h4 class="font-bold text-lg mb-2">${item.title}</h4>
                <p class="text-sm opacity-80 mb-2"><strong>Scenario:</strong> ${item.scenario}</p>
                <p class="text-sm bg-blue-900 p-3 rounded-md"><strong>Solution:</strong> ${item.solution}</p>
            </div>
        `).join('');
    }

    function renderContentPillars() {
        const container = document.getElementById('content-pillars-container');
        container.innerHTML = appData.contentPillars.map(pillar => `
            <div class="pillar-item p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 hover:border-blue-500">
                <div class="flex justify-between items-center">
                    <h4 class="font-bold text-slate-800">${pillar.title}</h4>
                    <svg class="w-5 h-5 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div class="pillar-detail hidden mt-3 pt-3 border-t border-slate-200 space-y-3">
                    <p class="text-sm text-slate-600"><strong class="font-semibold">Purpose:</strong> ${pillar.purpose}</p>
                    <div>
                        <p class="text-sm font-semibold text-slate-600 mb-1">Example Titles:</p>
                        <ul class="list-disc list-inside text-sm text-slate-500 space-y-1">
                            ${pillar.examples.map(ex => `<li>${ex}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');

        container.addEventListener('click', (e) => {
            const item = e.target.closest('.pillar-item');
            if (item) {
                item.querySelector('.pillar-detail').classList.toggle('hidden');
                item.querySelector('svg').classList.toggle('rotate-180');
            }
        });
    }

    function renderRevenueCalculator() {
        const container = document.getElementById('revenue-calculator-container');
        const { prices, defaults } = appData.newFunnel;

        container.innerHTML = `
            <div class="space-y-4 mb-6">
                <!-- Input Controls -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <label for="traffic" class="font-semibold text-slate-700">Traffic (Clicks)</label>
                        <input type="number" id="traffic" value="${defaults.traffic}" class="mt-1 w-full p-2 border border-slate-300 rounded-md">
                    </div>
                    <div>
                        <label for="fe_cvr" class="font-semibold text-slate-700">FE CVR (<span id="fe_cvr_val">${defaults.fe_cvr}</span>%)</label>
                        <input type="range" id="fe_cvr" min="1" max="10" value="${defaults.fe_cvr}" class="mt-1 w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer">
                    </div>
                     <div>
                        <label for="upsell1_cvr" class="font-semibold text-slate-700">Upsell 1 CVR (<span id="upsell1_cvr_val">${defaults.upsell1_cvr}</span>%)</label>
                        <input type="range" id="upsell1_cvr" min="5" max="25" value="${defaults.upsell1_cvr}" class="mt-1 w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer">
                    </div>
                    <div>
                        <label for="accelerator_cvr" class="font-semibold text-slate-700">Accelerator CVR (<span id="accelerator_cvr_val">${defaults.accelerator_cvr}</span>%)</label>
                        <input type="range" id="accelerator_cvr" min="1" max="15" value="${defaults.accelerator_cvr}" class="mt-1 w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer">
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white text-sm">
                    <thead class="bg-slate-100">
                        <tr>
                            <th class="text-left py-2 px-3 uppercase font-semibold text-slate-600">Stage</th>
                            <th class="text-right py-2 px-3 uppercase font-semibold text-slate-600">Price</th>
                            <th class="text-right py-2 px-3 uppercase font-semibold text-slate-600">Sales</th>
                            <th class="text-right py-2 px-3 uppercase font-semibold text-slate-600">Revenue</th>
                        </tr>
                    </thead>
                    <tbody id="revenue-table-body" class="text-slate-700"></tbody>
                </table>
            </div>
        `;

        const inputs = {
            traffic: document.getElementById('traffic'),
            fe_cvr: document.getElementById('fe_cvr'),
            upsell1_cvr: document.getElementById('upsell1_cvr'),
            accelerator_cvr: document.getElementById('accelerator_cvr')
        };

        const updateRevenueProjection = () => {
            const traffic = parseInt(inputs.traffic.value) || 0;
            const fe_cvr = parseInt(inputs.fe_cvr.value);
            const upsell1_cvr = parseInt(inputs.upsell1_cvr.value);
            const accelerator_cvr = parseInt(inputs.accelerator_cvr.value);
            
            document.getElementById('fe_cvr_val').textContent = fe_cvr;
            document.getElementById('upsell1_cvr_val').textContent = upsell1_cvr;
            document.getElementById('accelerator_cvr_val').textContent = accelerator_cvr;

            const fe_sales = Math.round(traffic * (fe_cvr / 100));
            const bump1_sales = Math.round(fe_sales * (defaults.bump1_take / 100));
            const bump2_sales = Math.round(fe_sales * (defaults.bump2_take / 100));
            const upsell1_sales = Math.round(fe_sales * (upsell1_cvr / 100));
            const upsell2_sales = Math.round(upsell1_sales * (defaults.upsell2_cvr / 100));
            const accelerator_sales = Math.round(fe_sales * (accelerator_cvr / 100));

            const fe_rev = fe_sales * prices.fe;
            const bump1_rev = bump1_sales * prices.bump1;
            const bump2_rev = bump2_sales * prices.bump2;
            const upsell1_rev = upsell1_sales * prices.upsell1;
            const upsell2_rev = upsell2_sales * prices.upsell2;
            const accelerator_rev = accelerator_sales * prices.accelerator;

            const total_rev = fe_rev + bump1_rev + bump2_rev + upsell1_rev + upsell2_rev + accelerator_rev;

            const formatCurrency = (num) => `$${num.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;

            document.getElementById('revenue-table-body').innerHTML = `
                <tr class="border-b"><td class="py-2 px-3 font-semibold">Front-End Offer</td><td class="text-right py-2 px-3">${formatCurrency(prices.fe)}</td><td class="text-right py-2 px-3">${fe_sales}</td><td class="text-right py-2 px-3">${formatCurrency(fe_rev)}</td></tr>
                <tr class="border-b"><td class="py-2 px-3 font-semibold">Order Bump 1</td><td class="text-right py-2 px-3">${formatCurrency(prices.bump1)}</td><td class="text-right py-2 px-3">${bump1_sales}</td><td class="text-right py-2 px-3">${formatCurrency(bump1_rev)}</td></tr>
                <tr class="border-b"><td class="py-2 px-3 font-semibold">Order Bump 2</td><td class="text-right py-2 px-3">${formatCurrency(prices.bump2)}</td><td class="text-right py-2 px-3">${bump2_sales}</td><td class="text-right py-2 px-3">${formatCurrency(bump2_rev)}</td></tr>
                <tr class="border-b"><td class="py-2 px-3 font-semibold">Upsell 1</td><td class="text-right py-2 px-3">${formatCurrency(prices.upsell1)}</td><td class="text-right py-2 px-3">${upsell1_sales}</td><td class="text-right py-2 px-3">${formatCurrency(upsell1_rev)}</td></tr>
                <tr class="border-b"><td class="py-2 px-3 font-semibold">Upsell 2</td><td class="text-right py-2 px-3">${formatCurrency(prices.upsell2)}</td><td class="text-right py-2 px-3">${upsell2_sales}</td><td class="text-right py-2 px-3">${formatCurrency(upsell2_rev)}</td></tr>
                <tr class="border-b bg-blue-50"><td class="py-2 px-3 font-bold text-blue-800">Accelerator Program</td><td class="text-right py-2 px-3 font-bold text-blue-800">${formatCurrency(prices.accelerator)}</td><td class="text-right py-2 px-3 font-bold text-blue-800">${accelerator_sales}</td><td class="text-right py-2 px-3 font-bold text-blue-800">${formatCurrency(accelerator_rev)}</td></tr>
                <tr class="bg-slate-200"><td class="py-3 px-3 font-bold text-lg" colspan="3">Total Projected Revenue</td><td class="text-right py-3 px-3 font-bold text-lg">${formatCurrency(total_rev)}</td></tr>
            `;
        };
        
        Object.values(inputs).forEach(input => {
            input.addEventListener('input', updateRevenueProjection);
        });

        updateRevenueProjection();
    }

    function initializeFunnelTabs() {
        const overviewTab = document.getElementById('funnel-overview-tab');
        const calcTab = document.getElementById('revenue-calc-tab');
        const overviewContent = document.getElementById('funnel-overview-content');
        const calcContent = document.getElementById('revenue-calc-content');

        function switchTab(activeTab, activeContent, inactiveTab, inactiveContent) {
            // Update active tab styling
            activeTab.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
            activeTab.classList.remove('bg-white', 'text-slate-700', 'border-slate-200', 'hover:border-blue-300', 'hover:text-blue-700');
            
            // Update inactive tab styling  
            inactiveTab.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
            inactiveTab.classList.add('bg-white', 'text-slate-700', 'border-slate-200', 'hover:border-blue-300', 'hover:text-blue-700');
            
            // Show/hide content
            activeContent.classList.remove('hidden');
            inactiveContent.classList.add('hidden');
        }

        overviewTab.addEventListener('click', () => {
            switchTab(overviewTab, overviewContent, calcTab, calcContent);
        });

        calcTab.addEventListener('click', () => {
            switchTab(calcTab, calcContent, overviewTab, overviewContent);
            // Render calculator when tab is clicked to ensure it's ready
            if (!document.getElementById('traffic')) {
                renderRevenueCalculator();
            }
        });
    }

    // --- Initial Renders ---
    renderPainPointChart();
    renderCompetitorAnalysis();
    renderBeliefLadder();
    renderDealOS();
    renderGuaranteeExamples();
    renderContentPillars();
    initializeFunnelTabs();

    // Initial navigation
    navigate(window.location.hash);

});