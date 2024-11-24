function filterJobs() {
    const locationFilter = document.getElementById('location').value;
    const jobs = document.querySelectorAll('.job');

    jobs.forEach(job => {
        const jobLocation = job.getAttribute('data-location');

        if (locationFilter === 'all' || jobLocation === locationFilter) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}
