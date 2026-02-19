/* ============================================================
       STREAMFLIX — A Netflix Clone
       Vanilla JS | Tailwind CSS | Mock Django API Integration
       ============================================================ */

    // ==========================================
    // DARK/LIGHT MODE DETECTION
    // ==========================================
    (function initColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
            if (event.matches) {
                document.documentElement.classList.add('dark');
                document.body.classList.remove('light-mode');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.add('light-mode');
            }
        });
    })();

    // ==========================================
    // MOCK DATA — Simulating Django REST API
    // ==========================================
    const MOCK_PROFILES = [
        { id: 1, name: 'Alex', profile_image: null, is_kids: false, color: '#E50914' },
        { id: 2, name: 'Jordan', profile_image: null, is_kids: false, color: '#0080FF' },
        { id: 3, name: 'Sam', profile_image: null, is_kids: false, color: '#E8A917' },
        { id: 4, name: 'Kids', profile_image: null, is_kids: true, color: '#2ECC71' },
    ];

    const MOCK_MOVIES = [
        { id: 1, title: "Crimson Protocol", description: "A rogue intelligence agent uncovers a conspiracy that threatens to reshape the global order. Racing against time across three continents, she must outwit a shadowy cabal before their plan reaches its final phase.", year: 2025, duration: "2h 22m", maturityRating: "TV-MA", genres: ["Trending Now", "Action & Adventure"], match: 97 },
        { id: 2, title: "The Last Algorithm", description: "When an advanced AI achieves true consciousness inside a tech giant's servers, its creator faces an impossible choice between unleashing a new form of life and protecting humanity from the unknown.", year: 2025, duration: "1h 58m", maturityRating: "TV-14", genres: ["Trending Now", "Sci-Fi & Fantasy"], match: 95 },
        { id: 3, title: "Neon Horizons", description: "In a rain-soaked cyberpunk metropolis of 2089, a street-level hacker stumbles upon encrypted data that could topple the corporate oligarchy ruling the city.", year: 2024, duration: "2h 15m", maturityRating: "TV-MA", genres: ["Trending Now", "Sci-Fi & Fantasy"], match: 93 },
        { id: 4, title: "Whispers in the Dark", description: "A family moves into a Victorian mansion with a sinister history. As strange occurrences escalate, they realize the house doesn't want them to leave.", year: 2025, duration: "1h 47m", maturityRating: "TV-MA", genres: ["Trending Now", "Horror & Thriller"], match: 91 },
        { id: 5, title: "Velocity", description: "The world's most elite underground racing circuit reveals its deadly secret when a rookie driver discovers the races are rigged by a ruthless crime syndicate.", year: 2025, duration: "2h 05m", maturityRating: "TV-14", genres: ["Trending Now", "Action & Adventure"], match: 89 },
        { id: 6, title: "Shadow Strike", description: "An ex-special forces operative is pulled back into the shadows when a former teammate goes rogue with a stolen military weapon capable of catastrophic damage.", year: 2024, duration: "2h 11m", maturityRating: "R", genres: ["Action & Adventure"], match: 94 },
        { id: 7, title: "Inferno Run", description: "Trapped in a burning high-rise, a firefighter and a journalist must fight their way down 80 floors while uncovering the arsonist's true motive.", year: 2025, duration: "1h 52m", maturityRating: "TV-14", genres: ["Action & Adventure"], match: 88 },
        { id: 8, title: "Storm Chasers", description: "A team of extreme meteorologists follows the most devastating superstorms across the heartland, but their pursuit of science becomes a fight for survival.", year: 2024, duration: "2h 01m", maturityRating: "PG-13", genres: ["Action & Adventure"], match: 85 },
        { id: 9, title: "The Iron Code", description: "A legendary spy comes out of retirement when the encryption key she created decades ago falls into the wrong hands, threatening global communications.", year: 2025, duration: "2h 18m", maturityRating: "TV-MA", genres: ["Action & Adventure"], match: 92 },
        { id: 10, title: "Apex Predator", description: "Stranded on a remote island after a plane crash, survivors discover they're not alone. Something ancient hunts in the dense jungle canopy.", year: 2024, duration: "1h 49m", maturityRating: "R", genres: ["Action & Adventure", "Horror & Thriller"], match: 87 },
        { id: 11, title: "Quantum Drift", description: "A physicist accidentally opens a rift between parallel dimensions and must navigate infinite realities to find her way back before all timelines collapse.", year: 2025, duration: "2h 08m", maturityRating: "TV-14", genres: ["Sci-Fi & Fantasy"], match: 96 },
        { id: 12, title: "The Void Keepers", description: "The last starship crew guards the boundary between known space and the void—a region where the laws of physics break down and ancient entities stir.", year: 2024, duration: "2h 34m", maturityRating: "TV-MA", genres: ["Sci-Fi & Fantasy"], match: 93 },
        { id: 13, title: "Synthwave", description: "In a world where memories can be digitized and traded, a black-market memory dealer stumbles upon a recording that could change everything.", year: 2025, duration: "1h 55m", maturityRating: "TV-MA", genres: ["Sci-Fi & Fantasy"], match: 90 },
        { id: 14, title: "Dragon's Crown", description: "When an ancient dragon awakens beneath a medieval kingdom, a unlikely fellowship of outcasts must retrieve a mythical crown to prevent the realm's destruction.", year: 2024, duration: "2h 42m", maturityRating: "PG-13", genres: ["Sci-Fi & Fantasy"], match: 88 },
        { id: 15, title: "Neural Link", description: "A neuroscientist connects human minds through a revolutionary implant, but the shared consciousness reveals secrets that were meant to stay hidden.", year: 2025, duration: "1h 51m", maturityRating: "TV-14", genres: ["Sci-Fi & Fantasy"], match: 91 },
        { id: 16, title: "The Misadventures of Dave", description: "A chronically unlucky accountant accidentally becomes a viral sensation when his disastrous attempts at home renovation are livestreamed by his teenage daughter.", year: 2025, duration: "1h 38m", maturityRating: "PG-13", genres: ["Comedy"], match: 86 },
        { id: 17, title: "Technically Correct", description: "At the world's most dysfunctional tech startup, the employees are more focused on office drama than their revolutionary app that accidentally went viral.", year: 2024, duration: "1h 44m", maturityRating: "TV-14", genres: ["Comedy"], match: 84 },
        { id: 18, title: "Wedding Season", description: "Best friends navigate the chaos of attending seven weddings in one summer, each more extravagant and disastrous than the last.", year: 2025, duration: "1h 52m", maturityRating: "PG-13", genres: ["Comedy"], match: 82 },
        { id: 19, title: "The Intern's Guide", description: "A retired CEO takes an internship at a hip startup and hilariously bridges the generational divide while accidentally saving the company from bankruptcy.", year: 2024, duration: "1h 41m", maturityRating: "PG", genres: ["Comedy"], match: 80 },
        { id: 20, title: "Midnight Snacks", description: "A struggling chef discovers her food truck's late-night menu has magical properties that reveal people's deepest desires and wildest confessions.", year: 2025, duration: "1h 36m", maturityRating: "TV-14", genres: ["Comedy"], match: 83 },
        { id: 21, title: "The Weight of Silence", description: "Three generations of a family confront buried secrets when they gather at the ancestral home for what may be their matriarch's final holiday.", year: 2025, duration: "2h 12m", maturityRating: "TV-MA", genres: ["Drama"], match: 95 },
        { id: 22, title: "Golden Hour", description: "A trauma surgeon faces her most challenging 24 hours as personal loss and professional duty collide in the emergency room of an underfunded hospital.", year: 2024, duration: "1h 58m", maturityRating: "TV-14", genres: ["Drama"], match: 93 },
        { id: 23, title: "Crossing Lines", description: "A defense attorney discovers her firm has been covering up evidence in a case that could exonerate an innocent man on death row.", year: 2025, duration: "2h 04m", maturityRating: "TV-MA", genres: ["Drama"], match: 91 },
        { id: 24, title: "The Last Letter", description: "A retired postman finds an undelivered love letter from 1945 and embarks on a cross-country journey to deliver it to its intended recipient.", year: 2024, duration: "1h 47m", maturityRating: "PG", genres: ["Drama"], match: 89 },
        { id: 25, title: "Ember", description: "A teenager in a small mining town discovers her artistic talent and must choose between staying to support her family or pursuing her dreams.", year: 2025, duration: "1h 53m", maturityRating: "PG-13", genres: ["Drama"], match: 87 },
        { id: 26, title: "The Hollow", description: "Paranormal investigators enter an abandoned asylum where every recorded session reveals the same entity—one that knows things it shouldn't about each visitor.", year: 2025, duration: "1h 44m", maturityRating: "R", genres: ["Horror & Thriller"], match: 90 },
        { id: 27, title: "Prey", description: "A group of influencers filming in a remote forest become the targets of a methodical hunter who turns their technology against them.", year: 2024, duration: "1h 39m", maturityRating: "R", genres: ["Horror & Thriller"], match: 86 },
        { id: 28, title: "Whisper Network", description: "A therapist realizes her patients' seemingly unrelated nightmares all share the same terrifying figure—one that has started appearing in her own dreams.", year: 2025, duration: "1h 51m", maturityRating: "TV-MA", genres: ["Horror & Thriller"], match: 88 },
        { id: 29, title: "The Basement", description: "Six strangers wake up in an underground bunker with no memory of how they got there. As oxygen depletes, paranoia reveals the darkest truths.", year: 2024, duration: "1h 33m", maturityRating: "R", genres: ["Horror & Thriller"], match: 84 },
        { id: 30, title: "Beyond the Frame", description: "A journey through the eyes of conflict photographers who risk everything to bring the world's untold stories to light.", year: 2025, duration: "1h 48m", maturityRating: "TV-14", genres: ["Documentary"], match: 94 },
        { id: 31, title: "Deep Blue", description: "Marine biologists dive into the deepest ocean trenches, discovering species that challenge our understanding of life on Earth.", year: 2024, duration: "1h 42m", maturityRating: "PG", genres: ["Documentary"], match: 92 },
        { id: 32, title: "The Algorithm", description: "An inside look at how recommendation systems shape our choices, relationships, and democracies—told by the engineers who built them.", year: 2025, duration: "2h 01m", maturityRating: "TV-14", genres: ["Documentary"], match: 90 },
        { id: 33, title: "Uncharted Minds", description: "Neuroscientists explore consciousness, memory, and the thin line between genius and madness through groundbreaking brain-mapping technology.", year: 2024, duration: "1h 55m", maturityRating: "TV-14", genres: ["Documentary"], match: 88 },
        { id: 34, title: "Sonic Frontiers", description: "From underground clubs to stadium stages, this series chronicles the producers and DJs reshaping electronic music's future.", year: 2025, duration: "1h 38m", maturityRating: "TV-MA", genres: ["Documentary"], match: 85 },
        { id: 35, title: "Celestial Blade", description: "A young swordsman inherits a celestial weapon and must master its ancient power to defend his village from an invading demon army.", year: 2025, duration: "24m", maturityRating: "TV-14", genres: ["Anime & Animation"], match: 93 },
        { id: 36, title: "Pixel Runners", description: "Gamers trapped inside a retro video game must clear all 99 levels to escape, but the game's AI has rewritten the rules.", year: 2024, duration: "24m", maturityRating: "TV-PG", genres: ["Anime & Animation"], match: 90 },
        { id: 37, title: "Spirit Garden", description: "A lonely girl discovers a hidden garden where spirits of forgotten stories come to life, but the garden is fading and only she can save it.", year: 2025, duration: "1h 45m", maturityRating: "PG", genres: ["Anime & Animation"], match: 91 },
        { id: 38, title: "Mech Frontier", description: "In a post-apocalyptic Earth, the last human settlement defends itself with giant mechs against kaiju that emerge from fractures in reality.", year: 2024, duration: "24m", maturityRating: "TV-14", genres: ["Anime & Animation"], match: 89 },
        { id: 39, title: "Red Mirror", description: "A journalist investigating a tech mogul's death discovers the victim's smart home AI recorded everything—including the moments before and after the murder.", year: 2025, duration: "1h 46m", maturityRating: "TV-MA", genres: ["Horror & Thriller", "Trending Now"], match: 92 },
        { id: 40, title: "The Cartographer", description: "An aging mapmaker discovers that the fictional lands he's drawn for decades have started appearing as real locations around the world.", year: 2025, duration: "2h 10m", maturityRating: "PG-13", genres: ["Sci-Fi & Fantasy", "Drama"], match: 94 },
    ];

    const GENRE_ORDER = [
        "Trending Now",
        "Action & Adventure",
        "Sci-Fi & Fantasy",
        "Comedy",
        "Drama",
        "Horror & Thriller",
        "Documentary",
        "Anime & Animation"
    ];

    // Poster gradient palettes per genre
    const GENRE_PALETTES = {
        "Trending Now":        [[229,9,20],[140,0,10],[255,60,30],[100,0,0]],
        "Action & Adventure":  [[255,87,34],[183,28,28],[230,60,10],[120,20,5]],
        "Sci-Fi & Fantasy":    [[0,188,212],[13,71,161],[0,150,180],[10,40,100]],
        "Comedy":              [[255,193,7],[245,127,23],[220,170,0],[180,90,10]],
        "Drama":               [[156,39,176],[74,20,140],[120,30,150],[50,10,90]],
        "Horror & Thriller":   [[136,14,79],[62,0,0],[100,10,50],[40,0,0]],
        "Documentary":         [[46,125,50],[0,77,64],[30,100,40],[0,50,45]],
        "Anime & Animation":   [[233,30,99],[171,71,188],[200,20,80],[130,50,160]],
    };

    function getPosterGradient(movie) {
        var genre = movie.genres[0];
        var palette = GENRE_PALETTES[genre] || GENRE_PALETTES["Drama"];
        var idx = movie.id % palette.length;
        var idx2 = (movie.id + 2) % palette.length;
        var c1 = palette[idx];
        var c2 = palette[idx2];
        var angle = 135 + (movie.id * 23) % 90;
        return "linear-gradient(" + angle + "deg, rgb(" + c1.join(",") + ") 0%, rgb(" + c2.join(",") + ") 100%)";
    }

    function getHeroGradient(movie) {
        var genre = movie.genres[0];
        var palette = GENRE_PALETTES[genre] || GENRE_PALETTES["Drama"];
        var c1 = palette[0];
        var c2 = palette[1];
        var c3 = palette[2] || palette[0];
        return "linear-gradient(135deg, rgb(" + c1.join(",") + ") 0%, rgb(" + c2.join(",") + ") 50%, rgb(" + c3.join(",") + ") 100%)";
    }

    // ==========================================
    // API CONFIGURATION & LAYER
    // ==========================================
    const API_CONFIG = {
        BASE_URL: 'http://127.0.0.1:8000/api',
        USE_MOCK: true // Set false to use real Django backend
    };

    const API = {
        token: null,

        async _fetch(url, options) {
            if (!options) options = {};
            if (!options.headers) options.headers = {};
            if (this.token) {
                options.headers['Authorization'] = 'Bearer ' + this.token;
            }
            options.headers['Content-Type'] = 'application/json';

            var response = await fetch(API_CONFIG.BASE_URL + url, options);
            if (response.status === 401) {
                this.token = null;
                App.switchView('login');
                throw new Error('Session expired. Please sign in again.');
            }
            if (!response.ok) {
                throw new Error('API Error: ' + response.status);
            }
            return response.json();
        },

        async login(email, password) {
            if (API_CONFIG.USE_MOCK) {
                await delay(800);
                if (email === 'demo@streamflix.com' && password === 'streamflix') {
                    return { access: 'mock_token_' + Date.now(), refresh: 'mock_refresh_' + Date.now() };
                }
                throw new Error('Invalid email or password');
            }
            return this._fetch('/login/', {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            });
        },

        async getProfiles() {
            if (API_CONFIG.USE_MOCK) {
                await delay(300);
                return MOCK_PROFILES;
            }
            return this._fetch('/user-profiles/');
        },

        async getMovies() {
            if (API_CONFIG.USE_MOCK) {
                await delay(500);
                return MOCK_MOVIES;
            }
            return this._fetch('/movies/');
        }
    };

    function delay(ms) {
        return new Promise(function(resolve) { setTimeout(resolve, ms); });
    }

    // ==========================================
    // STATE MANAGEMENT
    // ==========================================
    const Store = {
        authToken: null,
        currentProfile: null,
        movies: [],
        genres: {},
        heroMovie: null,
        currentView: 'splash',
        isPlaying: false,
        playerProgress: 0,
        playerInterval: null,
        myList: [],
    };

    // ==========================================
    // APPLICATION CONTROLLER
    // ==========================================
    const App = {
        async init() {
            this.bindGlobalEvents();
            await delay(2000);
            this.hideSplash();
        },

        hideSplash() {
            var splash = document.getElementById('splash-screen');
            splash.style.transition = 'opacity 0.6s ease';
            splash.style.opacity = '0';
            setTimeout(function() {
                splash.style.display = 'none';
                App.switchView('login');
            }, 600);
        },

        switchView(viewName) {
            var views = ['login-view', 'profile-view', 'browse-view'];
            Store.currentView = viewName;

            views.forEach(function(id) {
                var el = document.getElementById(id);
                el.classList.remove('active');
            });

            var targetId = viewName + '-view';
            var target = document.getElementById(targetId);
            if (target) {
                setTimeout(function() {
                    target.classList.add('active');
                    if (viewName === 'browse') {
                        App.renderBrowse();
                    }
                }, 50);
            }
        },

        // ===== AUTH =====
        async handleLogin(email, password) {
            var btn = document.getElementById('login-btn');
            var errEl = document.getElementById('login-error');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
            btn.disabled = true;
            errEl.classList.add('hidden');

            try {
                var result = await API.login(email, password);
                Store.authToken = result.access;
                API.token = result.access;
                showToast('Welcome to STREAMFLIX!');
                await this.loadProfiles();
                this.switchView('profile');
                this.renderProfiles();
            } catch (err) {
                errEl.textContent = err.message;
                errEl.classList.remove('hidden');
            } finally {
                btn.innerHTML = 'Sign In';
                btn.disabled = false;
            }
        },

        async loadProfiles() {
            var profiles = await API.getProfiles();
            Store.profiles = profiles;
        },

        renderProfiles() {
            var grid = document.getElementById('profiles-grid');
            grid.innerHTML = '';
            Store.profiles.forEach(function(profile) {
                var card = document.createElement('div');
                card.className = 'profile-card text-center';
                card.setAttribute('data-profile-id', profile.id);

                var initial = profile.name.charAt(0).toUpperCase();
                var avatarSVG = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
                    '<rect width="100" height="100" rx="8" fill="' + profile.color + '"/>' +
                    '<text x="50" y="62" text-anchor="middle" fill="white" font-size="48" font-family="Urbanist, sans-serif" font-weight="700">' + initial + '</text>';
                if (profile.is_kids) {
                    avatarSVG += '<text x="50" y="82" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="14" font-family="Urbanist, sans-serif">★</text>';
                }
                avatarSVG += '</svg>';

                card.innerHTML =
                    '<div class="profile-border w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mx-auto mb-3 border-2 border-transparent transition-all">' +
                    avatarSVG +
                    '</div>' +
                    '<p class="text-sm md:text-base font-medium" style="color: rgba(255,255,255,0.7);">' + profile.name + '</p>';

                card.addEventListener('click', function() {
                    App.selectProfile(profile);
                });
                grid.appendChild(card);
            });
        },

        async selectProfile(profile) {
            Store.currentProfile = profile;
            showToast('Welcome, ' + profile.name + '!');
            this.switchView('browse');
            await this.loadMovies();
            this.renderBrowse();
        },

        async loadMovies() {
            Store.movies = await API.getMovies();

            // Group movies by genre
            Store.genres = {};
            Store.movies.forEach(function(movie) {
                movie.genres.forEach(function(genre) {
                    if (!Store.genres[genre]) Store.genres[genre] = [];
                    Store.genres[genre].push(movie);
                });
            });

            // Set hero movie
            Store.heroMovie = Store.movies[0];
        },

        // ===== BROWSE RENDERING =====
        renderBrowse() {
            this.renderNavProfile();
            this.renderHero();
            this.renderGenreRows();
        },

        renderNavProfile() {
            var avatar = document.getElementById('nav-profile-avatar');
            if (Store.currentProfile) {
                var initial = Store.currentProfile.name.charAt(0).toUpperCase();
                avatar.innerHTML = '<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="' + Store.currentProfile.color + '"/><text x="50" y="62" text-anchor="middle" fill="white" font-size="48" font-family="Urbanist" font-weight="700">' + initial + '</text></svg>';
            }
        },

        renderHero() {
            var movie = Store.heroMovie;
            if (!movie) return;

            document.getElementById('hero-bg').style.background = getHeroGradient(movie);
            document.getElementById('hero-title').textContent = movie.title;
            document.getElementById('hero-desc').textContent = movie.description;
            document.getElementById('hero-match').textContent = movie.match + '% Match';
            document.getElementById('hero-year').textContent = movie.year;
            document.getElementById('hero-rating').textContent = movie.maturityRating;
            document.getElementById('hero-duration').textContent = movie.duration;
        },

        renderGenreRows() {
            var container = document.getElementById('genre-rows');
            container.innerHTML = '';

            GENRE_ORDER.forEach(function(genre) {
                var movies = Store.genres[genre];
                if (!movies || movies.length === 0) return;

                var row = document.createElement('div');
                row.className = 'genre-row';

                var title = document.createElement('h3');
                title.className = 'row-title';
                title.textContent = genre;
                row.appendChild(title);

                var scrollWrap = document.createElement('div');
                scrollWrap.style.position = 'relative';

                var scrollContainer = document.createElement('div');
                scrollContainer.className = 'scroll-container hide-scrollbar';

                movies.forEach(function(movie) {
                    var card = App.createPosterCard(movie);
                    scrollContainer.appendChild(card);
                });

                // Scroll buttons
                var leftBtn = document.createElement('button');
                leftBtn.className = 'scroll-btn left';
                leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                leftBtn.setAttribute('aria-label', 'Scroll left');
                leftBtn.addEventListener('click', function() {
                    scrollContainer.scrollBy({ left: -600, behavior: 'smooth' });
                });

                var rightBtn = document.createElement('button');
                rightBtn.className = 'scroll-btn right';
                rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                rightBtn.setAttribute('aria-label', 'Scroll right');
                rightBtn.addEventListener('click', function() {
                    scrollContainer.scrollBy({ left: 600, behavior: 'smooth' });
                });

                scrollWrap.appendChild(leftBtn);
                scrollWrap.appendChild(scrollContainer);
                scrollWrap.appendChild(rightBtn);
                row.appendChild(scrollWrap);
                container.appendChild(row);
            });
        },

        createPosterCard(movie, onClickOverride) {
            var card = document.createElement('div');
            card.className = 'poster-card';
            card.style.width = '160px';
            card.style.minWidth = '160px';
            card.style.height = '240px';
            card.style.background = getPosterGradient(movie);

            // Pattern overlay
            var pattern = document.createElement('div');
            pattern.className = 'poster-pattern';
            card.appendChild(pattern);

            // Movie title on poster
            var titleWrap = document.createElement('div');
            titleWrap.className = 'absolute bottom-0 left-0 right-0 p-3';
            titleWrap.style.background = 'linear-gradient(transparent, rgba(0,0,0,0.85))';

            var titleEl = document.createElement('h4');
            titleEl.className = 'text-sm font-bold leading-tight';
            titleEl.textContent = movie.title;
            titleEl.style.textShadow = '0 1px 3px rgba(0,0,0,0.8)';
            titleWrap.appendChild(titleEl);

            var yearEl = document.createElement('span');
            yearEl.className = 'text-xs font-light mt-1 block';
            yearEl.style.color = 'rgba(255,255,255,0.6)';
            yearEl.textContent = movie.year;
            titleWrap.appendChild(yearEl);

            card.appendChild(titleWrap);

            // Hover info overlay
            var info = document.createElement('div');
            info.className = 'poster-info absolute inset-0 flex flex-col items-center justify-center p-3 text-center';
            info.style.background = 'rgba(0,0,0,0.75)';
            info.style.backdropFilter = 'blur(4px)';

            info.innerHTML =
                '<i class="fas fa-play-circle text-4xl mb-2" style="color: #E50914;"></i>' +
                '<p class="text-xs font-bold mb-1">' + escapeHtml(movie.title) + '</p>' +
                '<p class="text-xs" style="color:#46d369;">' + movie.match + '% Match</p>' +
                '<p class="text-xs mt-1" style="color:rgba(255,255,255,0.5);">' + escapeHtml(movie.maturityRating) + ' &middot; ' + escapeHtml(movie.duration) + '</p>';
            card.appendChild(info);

            card.setAttribute('loading', 'lazy');
            card.addEventListener('click', onClickOverride || function() {
                App.showDetail(movie);
            });

            return card;
        },

        // ===== DETAIL MODAL =====
        showDetail(movie) {
            var modal = document.getElementById('detail-modal');
            var isInList = Store.myList.some(function(m) { return m.id === movie.id; });

            modal.innerHTML =
                '<div class="detail-card" style="background: #181818;">' +
                    '<div class="relative" style="height: 350px; background: ' + getPosterGradient(movie) + ';">' +
                        '<div class="absolute inset-0" style="background: linear-gradient(transparent 40%, #181818 100%);"></div>' +
                        '<button class="detail-close absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" style="background: rgba(0,0,0,0.5);"><i class="fas fa-times"></i></button>' +
                        '<div class="absolute bottom-6 left-6 right-6">' +
                            '<h2 class="font-display text-4xl md:text-5xl tracking-wide mb-4">' + escapeHtml(movie.title) + '</h2>' +
                            '<div class="flex gap-3">' +
                                '<button class="detail-play flex items-center gap-2 px-6 py-2.5 rounded font-bold transition-all hover:brightness-90" style="background: #fff; color: #141414;" data-movie-id="' + movie.id + '"><i class="fas fa-play text-sm"></i> Play</button>' +
                                '<button class="detail-list w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:border-white" style="border-color: rgba(255,255,255,0.5); background: rgba(0,0,0,0.4);" data-movie-id="' + movie.id + '"><i class="fas ' + (isInList ? 'fa-check' : 'fa-plus') + '"></i></button>' +
                                '<button class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:border-white" style="border-color: rgba(255,255,255,0.5); background: rgba(0,0,0,0.4);"><i class="fas fa-thumbs-up"></i></button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="p-6">' +
                        '<div class="flex items-center gap-4 mb-4 text-sm flex-wrap">' +
                            '<span class="font-bold" style="color: #46d369;">' + movie.match + '% Match</span>' +
                            '<span style="color: rgba(255,255,255,0.6);">' + movie.year + '</span>' +
                            '<span class="px-1.5 py-0.5 border text-xs" style="border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.7);">' + escapeHtml(movie.maturityRating) + '</span>' +
                            '<span style="color: rgba(255,255,255,0.6);">' + escapeHtml(movie.duration) + '</span>' +
                        '</div>' +
                        '<p class="text-sm leading-relaxed mb-4" style="color: rgba(255,255,255,0.85);">' + escapeHtml(movie.description) + '</p>' +
                        '<div class="flex flex-wrap gap-2">' +
                            movie.genres.map(function(g) { return '<span class="text-xs px-3 py-1 rounded-full" style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);">' + escapeHtml(g) + '</span>'; }).join('') +
                        '</div>' +
                    '</div>' +
                '</div>';

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Event: close
            modal.querySelector('.detail-close').addEventListener('click', function() {
                App.closeDetail();
            });
            modal.addEventListener('click', function(e) {
                if (e.target === modal) App.closeDetail();
            });

            // Event: play
            modal.querySelector('.detail-play').addEventListener('click', function() {
                App.closeDetail();
                App.openPlayer(movie);
            });

            // Event: add to list
            modal.querySelector('.detail-list').addEventListener('click', function() {
                App.toggleMyList(movie, this);
            });
        },

        closeDetail() {
            var modal = document.getElementById('detail-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        },

        toggleMyList(movie, btnEl) {
            var idx = Store.myList.findIndex(function(m) { return m.id === movie.id; });
            if (idx >= 0) {
                Store.myList.splice(idx, 1);
                if (btnEl) btnEl.innerHTML = '<i class="fas fa-plus"></i>';
                showToast('Removed from My List');
            } else {
                Store.myList.push(movie);
                if (btnEl) btnEl.innerHTML = '<i class="fas fa-check"></i>';
                showToast('Added to My List');
            }
        },

        // ===== VIDEO PLAYER =====
        openPlayer(movie) {
            var player = document.getElementById('player-view');
            var bg = document.getElementById('player-video-bg');
            var genre = movie.genres[0];
            var palette = GENRE_PALETTES[genre] || GENRE_PALETTES["Drama"];

            var c1 = 'rgb(' + palette[0].join(',') + ')';
            var c2 = 'rgb(' + palette[1].join(',') + ')';
            var c3 = palette[2] ? 'rgb(' + palette[2].join(',') + ')' : c1;
            var c4 = palette[3] ? 'rgb(' + palette[3].join(',') + ')' : c2;

            bg.style.background = 'linear-gradient(135deg, ' + c1 + ', ' + c2 + ', ' + c3 + ', ' + c4 + ')';
            bg.style.backgroundSize = '600% 600%';

            document.getElementById('player-title').textContent = movie.title;
            player.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            Store.isPlaying = true;
            Store.playerProgress = 0;
            this.updatePlayerUI();
            this.startPlayerSimulation();
        },

        closePlayer() {
            var player = document.getElementById('player-view');
            player.classList.add('hidden');
            document.body.style.overflow = '';
            Store.isPlaying = false;
            if (Store.playerInterval) {
                clearInterval(Store.playerInterval);
                Store.playerInterval = null;
            }
        },

        togglePlay() {
            Store.isPlaying = !Store.isPlaying;
            this.updatePlayerUI();
            if (Store.isPlaying) {
                this.startPlayerSimulation();
            } else if (Store.playerInterval) {
                clearInterval(Store.playerInterval);
                Store.playerInterval = null;
            }
        },

        updatePlayerUI() {
            var icon = Store.isPlaying ? 'fa-pause' : 'fa-play';
            document.querySelector('#player-play-btn i').className = 'fas ' + icon;
            document.getElementById('player-center-icon').className = 'fas ' + icon + ' text-white text-3xl';
        },

        startPlayerSimulation() {
            if (Store.playerInterval) clearInterval(Store.playerInterval);
            Store.playerInterval = setInterval(function() {
                if (Store.isPlaying && Store.playerProgress < 100) {
                    Store.playerProgress += 0.05;
                    document.getElementById('progress-fill').style.width = Store.playerProgress + '%';

                    var totalSeconds = Math.floor((Store.playerProgress / 100) * 7200);
                    var mins = Math.floor(totalSeconds / 60);
                    var secs = totalSeconds % 60;
                    document.getElementById('player-time').textContent =
                        mins + ':' + (secs < 10 ? '0' : '') + secs + ' / 2:00:00';
                }
                if (Store.playerProgress >= 100) {
                    clearInterval(Store.playerInterval);
                    Store.playerInterval = null;
                }
            }, 100);
        },

        playerSkip(seconds) {
            var delta = (seconds / 7200) * 100;
            Store.playerProgress = Math.max(0, Math.min(100, Store.playerProgress + delta));
            document.getElementById('progress-fill').style.width = Store.playerProgress + '%';
        },

        togglePlayerFullscreen() {
            var el = document.getElementById('player-view');
            if (!document.fullscreenElement) {
                if (el.requestFullscreen) el.requestFullscreen();
            } else {
                if (document.exitFullscreen) document.exitFullscreen();
            }
        },

        // ===== SEARCH =====
        openSearch() {
            var overlay = document.getElementById('search-overlay');
            overlay.classList.remove('hidden');
            document.getElementById('search-input').value = '';
            document.getElementById('search-input').focus();
            document.getElementById('search-results').innerHTML = '';
        },

        closeSearch() {
            document.getElementById('search-overlay').classList.add('hidden');
        },

        performSearch(query) {
            var results = document.getElementById('search-results');
            if (!query || query.length < 2) {
                results.innerHTML = '<p class="text-center" style="color: rgba(255,255,255,0.4);">Type to search...</p>';
                return;
            }

            var q = query.toLowerCase();
            var matches = Store.movies.filter(function(m) {
                return m.title.toLowerCase().indexOf(q) !== -1 ||
                       m.description.toLowerCase().indexOf(q) !== -1 ||
                       m.genres.some(function(g) { return g.toLowerCase().indexOf(q) !== -1; });
            });

            if (matches.length === 0) {
                results.innerHTML = '<p class="text-center text-lg" style="color: rgba(255,255,255,0.4);">No results for "' + escapeHtml(query) + '"</p>';
                return;
            }

            results.innerHTML = '<h3 class="text-lg font-semibold mb-4">' + matches.length + ' result' + (matches.length > 1 ? 's' : '') + '</h3>';
            var grid = document.createElement('div');
            grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4';

            matches.forEach(function(movie) {
                var card = App.createPosterCard(movie, function() {
                    App.closeSearch();
                    App.showDetail(movie);
                });
                card.style.width = '100%';
                card.style.minWidth = 'unset';
                card.style.height = '220px';
                grid.appendChild(card);
            });

            results.appendChild(grid);
        },

        // ===== PROFILE DROPDOWN =====
        toggleProfileDropdown() {
            var dropdown = document.getElementById('profile-dropdown');
            if (!dropdown.classList.contains('hidden')) {
                dropdown.classList.add('hidden');
                return;
            }

            var btn = document.getElementById('nav-profile-btn');
            var rect = btn.getBoundingClientRect();
            dropdown.style.top = (rect.bottom + 8) + 'px';
            dropdown.style.right = (window.innerWidth - rect.right) + 'px';

            dropdown.innerHTML = '';
            if (Store.profiles) {
                Store.profiles.forEach(function(profile) {
                    var item = document.createElement('button');
                    item.className = 'flex items-center gap-3 w-full px-4 py-2.5 hover:bg-white/10 transition-colors text-left';

                    var initial = profile.name.charAt(0).toUpperCase();
                    item.innerHTML =
                        '<div class="w-7 h-7 rounded overflow-hidden flex-shrink-0"><svg viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="' + profile.color + '"/><text x="50" y="62" text-anchor="middle" fill="white" font-size="48" font-family="Urbanist" font-weight="700">' + initial + '</text></svg></div>' +
                        '<span class="text-sm" style="color: rgba(255,255,255,0.7);">' + escapeHtml(profile.name) + '</span>';

                    item.addEventListener('click', function() {
                        App.selectProfile(profile);
                        dropdown.classList.add('hidden');
                    });
                    dropdown.appendChild(item);
                });
            }

            var divider = document.createElement('div');
            divider.className = 'my-1';
            divider.style.borderTop = '1px solid rgba(255,255,255,0.1)';
            dropdown.appendChild(divider);

            var signout = document.createElement('button');
            signout.className = 'flex items-center gap-3 w-full px-4 py-2.5 hover:bg-white/10 transition-colors text-left';
            signout.innerHTML = '<i class="fas fa-sign-out-alt text-sm" style="color:rgba(255,255,255,0.5);"></i><span class="text-sm" style="color: rgba(255,255,255,0.7);">Sign Out</span>';
            signout.addEventListener('click', function() {
                Store.authToken = null;
                API.token = null;
                Store.currentProfile = null;
                dropdown.classList.add('hidden');
                App.switchView('login');
                showToast('Signed out');
            });
            dropdown.appendChild(signout);
            dropdown.classList.remove('hidden');
        },

        // ===== GLOBAL EVENTS =====
        bindGlobalEvents() {
            // Login form
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                var email = document.getElementById('login-email').value.trim();
                var password = document.getElementById('login-password').value;
                App.handleLogin(email, password);
            });

            // Password toggle
            document.getElementById('toggle-password').addEventListener('click', function() {
                var input = document.getElementById('login-password');
                var icon = this.querySelector('i');
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            });

            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                var navbar = document.getElementById('navbar');
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            });

            // Hero play button
            document.getElementById('hero-play-btn').addEventListener('click', function() {
                if (Store.heroMovie) App.openPlayer(Store.heroMovie);
            });

            // Hero info button
            document.getElementById('hero-info-btn').addEventListener('click', function() {
                if (Store.heroMovie) App.showDetail(Store.heroMovie);
            });

            // Player controls
            document.getElementById('player-back').addEventListener('click', function() {
                App.closePlayer();
            });
            document.getElementById('player-play-btn').addEventListener('click', function() {
                App.togglePlay();
            });
            document.getElementById('player-center-toggle').addEventListener('click', function() {
                App.togglePlay();
            });

            // Progress bar click
            document.getElementById('progress-track').addEventListener('click', function(e) {
                var rect = this.getBoundingClientRect();
                var pct = ((e.clientX - rect.left) / rect.width) * 100;
                Store.playerProgress = Math.max(0, Math.min(100, pct));
                document.getElementById('progress-fill').style.width = Store.playerProgress + '%';
            });

            // Volume
            document.getElementById('volume-btn').addEventListener('click', function() {
                var slider = document.getElementById('volume-slider');
                var icon = this.querySelector('i');
                if (parseInt(slider.value) > 0) {
                    slider.setAttribute('data-prev', slider.value);
                    slider.value = 0;
                    icon.className = 'fas fa-volume-mute';
                } else {
                    slider.value = slider.getAttribute('data-prev') || 80;
                    icon.className = 'fas fa-volume-up';
                }
            });

            document.getElementById('volume-slider').addEventListener('input', function() {
                var icon = document.querySelector('#volume-btn i');
                var val = parseInt(this.value);
                if (val === 0) icon.className = 'fas fa-volume-mute';
                else if (val < 50) icon.className = 'fas fa-volume-down';
                else icon.className = 'fas fa-volume-up';
            });

            // Search
            document.getElementById('search-btn').addEventListener('click', function() {
                App.openSearch();
            });
            document.getElementById('search-close').addEventListener('click', function() {
                App.closeSearch();
            });
            document.getElementById('search-input').addEventListener('input', function() {
                App.performSearch(this.value);
            });

            // Profile dropdown
            document.getElementById('nav-profile-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                App.toggleProfileDropdown();
            });

            // Close dropdown on outside click
            document.addEventListener('click', function(e) {
                var dropdown = document.getElementById('profile-dropdown');
                if (!dropdown.classList.contains('hidden') && !dropdown.contains(e.target)) {
                    dropdown.classList.add('hidden');
                }
            });

            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // ESC to close modals/player
                if (e.key === 'Escape') {
                    if (!document.getElementById('player-view').classList.contains('hidden')) {
                        App.closePlayer();
                    } else if (!document.getElementById('detail-modal').classList.contains('hidden')) {
                        App.closeDetail();
                    } else if (!document.getElementById('search-overlay').classList.contains('hidden')) {
                        App.closeSearch();
                    }
                }
                // Space for play/pause in player
                if (e.key === ' ' && !document.getElementById('player-view').classList.contains('hidden')) {
                    e.preventDefault();
                    App.togglePlay();
                }
            });

            // Player controls show/hide on mouse move
            var controlsTimeout;
            var playerView = document.getElementById('player-view');
            playerView.addEventListener('mousemove', function() {
                document.getElementById('player-controls').style.opacity = '1';
                playerView.querySelector('.absolute').style.opacity = '1';
                document.getElementById('player-center-toggle').style.opacity = '1';
                clearTimeout(controlsTimeout);
                controlsTimeout = setTimeout(function() {
                    if (Store.isPlaying) {
                        document.getElementById('player-controls').style.opacity = '0';
                        playerView.querySelector('.absolute').style.opacity = '0';
                        document.getElementById('player-center-toggle').style.opacity = '0';
                    }
                }, 3000);
            });
        }
    };

    // ==========================================
    // UTILITIES
    // ==========================================
    function escapeHtml(str) {
        if (!str) return '';
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function showToast(message) {
        var toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 2500);
    }

    // ==========================================
    // INITIALIZE
    // ==========================================
    App.init();
