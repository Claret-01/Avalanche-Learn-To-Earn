  // This is the same correct JavaScript from before.
  document.addEventListener('DOMContentLoaded', function() {
    // --- Get All Interactive Elements ---
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

    // --- Reusable Function to Switch Tabs ---
    function switchToTab(targetId) {
        contentPanes.forEach(pane => pane.classList.remove('active'));
        tabs.forEach(item => item.classList.remove('active'));

        const paneToActivate = document.getElementById(targetId);
        if (paneToActivate) paneToActivate.classList.add('active');

        const tabToActivate = document.querySelector(`.tab[data-target="${targetId}"]`);
        if (tabToActivate) tabToActivate.classList.add('active');
    }

    // --- Side Menu Interactivity ---
    openMenuBtn.addEventListener('click', () => sideMenu.style.width = '250px');
    closeMenuBtn.addEventListener('click', () => sideMenu.style.width = '0');

    // --- Join Button Interactivity ---
    joinBtn.addEventListener('click', () => {
        joinBtn.classList.toggle('joined');
        joinBtn.textContent = joinBtn.classList.contains('joined') ? 'Joined' : 'Join';
    });

    // --- Tab Switching Interactivity ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPaneId = tab.getAttribute('data-target');
            switchToTab(targetPaneId);
        });
    });

    // ===================================================================
    // --- THIS IS THE RESTORED CODE FOR THE QUEST DROPDOWN ---
    const quests = document.querySelectorAll('.quest');
    quests.forEach(quest => {
        const header = quest.querySelector('.quest-header');
        // This check prevents errors if a quest doesn't have details
        if (header && quest.querySelector('.quest-details')) {
            header.addEventListener('click', () => {
                quest.classList.toggle('expanded');
            });
        }
    });
    // ===================================================================

    // --- Event Listener for Header Profile Circle ---
    profileCircleBtn.addEventListener('click', () => switchToTab('profile'));
    
    // --- Event Listener for Home Page CTA Button ---
    startQuestsBtn.addEventListener('click', () => switchToTab('quests'));

    // --- Event Listeners for Side Menu Links ---
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