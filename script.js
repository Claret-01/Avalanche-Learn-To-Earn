  // This is the same correct JavaScript from before.
        document.addEventListener('DOMContentLoaded', function() {
            const sideMenu = document.getElementById('side-menu');
            const openMenuBtn = document.getElementById('open-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const joinBtn = document.getElementById('join-btn');
            const tabs = document.querySelectorAll('.tab');
            const contentPanes = document.querySelectorAll('.content-pane');
            const profileCircleBtn = document.getElementById('profile-circle-btn');
            const startQuestsBtn = document.getElementById('start-quests-btn');
            const menuHomeLink = document.getElementById('menu-home-link');
            const menuProfileLink = document.getElementById('menu-profile-link');
            const menuQuestsLink = document.getElementById('menu-quests-link');
            const menuLeaderboardLink = document.getElementById('menu-leaderboard-link');

            function switchToTab(targetId) {
                contentPanes.forEach(pane => pane.classList.remove('active'));
                tabs.forEach(item => item.classList.remove('active'));

                const paneToActivate = document.getElementById(targetId);
                if (paneToActivate) paneToActivate.classList.add('active');

                const tabToActivate = document.querySelector(`.tab[data-target="${targetId}"]`);
                if (tabToActivate) tabToActivate.classList.add('active');
            }

            openMenuBtn.addEventListener('click', () => sideMenu.style.width = '250px');
            closeMenuBtn.addEventListener('click', () => sideMenu.style.width = '0');

            joinBtn.addEventListener('click', () => {
                joinBtn.classList.toggle('joined');
                joinBtn.textContent = joinBtn.classList.contains('joined') ? 'Joined' : 'Join';
            });

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetPaneId = tab.getAttribute('data-target');
                    switchToTab(targetPaneId);
                });
            });
              // --- Quest Expansion Interactivity ---
        quests.forEach(quest => {
            const header = quest.querySelector('.quest-header');
            header.addEventListener('click', () => {
                if (quest.querySelector('.quest-details')) {
                    quest.classList.toggle('expanded');
                }
            });
        });

            profileCircleBtn.addEventListener('click', () => switchToTab('profile'));
            startQuestsBtn.addEventListener('click', () => switchToTab('quests'));

              menuQuestsLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchToTab('quests');
            sideMenu.style.width = '0'; // Close the menu
        });


            const menuLinks = [menuHomeLink, menuProfileLink, menuQuestsLink, menuLeaderboardLink];
            menuLinks.forEach(link => {
                if (link) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.id.split('-')[1];
                        switchToTab(targetId);
                        sideMenu.style.width = '0';
                    });
                }
            });
        });