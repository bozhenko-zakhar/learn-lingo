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
					/>
				</div>
			</div>
		</main>
  );
}
