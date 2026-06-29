import Image from "next/image";
import css from "./page.module.css";

export default function Home() {
  return (
		<main className={css.main}>
			<div className={css.welcome_container}>
				<div className={css.welcome_content}>
					<h1>Unlock your potential with the best <span className={css.marked_text}><span>language</span></span> tutors</h1>
					<p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
					<button>Get started</button>
				</div>
				<div className={css.welcome_image_container}>
					<Image
						src="/mac-smiling.jpg"
						alt="Smiling girl hiding behind laptop"
						width={568}
						height={530}
						loading="eager"
					/>
				</div>
			</div>
			<div className={css.statistics_container}>
				<ul className={css.statistics_list}>
					<li className={css.statistics_item}>
						<p>32,000 +</p>
						<p>Experienced tutors</p>
					</li>
					<li className={css.statistics_item}>
						<p>300,000 +</p>
						<p>5-star tutor reviews</p>
					</li>
					<li className={css.statistics_item}>
						<p>120 +</p>
						<p>Subjects taught</p>
					</li>
					<li className={css.statistics_item}>
						<p>200 +</p>
						<p>Tutor nationalities</p>
					</li>
				</ul>
			</div>
		</main>
  );
}	
