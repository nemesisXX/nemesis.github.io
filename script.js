document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/yuanxin/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                projectList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
