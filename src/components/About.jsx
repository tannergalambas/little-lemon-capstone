import './About.css';
export default function About() {
return (
<section className="about" aria-labelledby="about-title">
<h2 id="about-title">About Little Lemon</h2>
<div className="about__grid">
<div className="about__text">
<p>
Little Lemon brings Mediterranean comfort food to the heart of
Chicago.
We focus on seasonal ingredients, simple recipes, and a relaxed
dining experience.
</p>
</div>
<div className="about__images" aria-hidden="true">
<div className="about__img" />
<div className="about__img about__img--offset" />
</div>
</div>
</section>
);
}