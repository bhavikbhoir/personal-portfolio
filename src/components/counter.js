import React, { Component } from 'react';



export const Counter = () => {
    const [projects, setprojects] = React.useState(0)
    const [certificates, setcertificates] = React.useState(0)
    const [blogs, setblogs] = React.useState(0)
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }

      React.useEffect(() => {
        const obj = document.getElementById("projects");
        setprojects(animateValue(obj, 0, 12, 2000))
        const obj1 = document.getElementById("certificates");
        setcertificates(animateValue(obj1, 0, 11, 2000))
        const obj2 = document.getElementById("blogs");
        setblogs(animateValue(obj2, 0, 1, 2000))
      })
    return (
        <div className="counter">
            <div>
                <div id="projects">
                    {projects}
                </div>
                <p>Projects</p>
            </div>
            <div>
                <div id="certificates">
                    {certificates}
                </div>
                <p>Certificates</p>
            </div>
            <div>
                <div id="blogs">
                    {blogs}
                </div>
                <p>Blogs</p>
            </div>
        </div>
    )
}