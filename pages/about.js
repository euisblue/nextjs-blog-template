import Image from 'next/image';
import Link from 'next/link';
import Footer from '@components/Footer';
import metadata from '@data/metadata';
import Container from '@components/Container';
import utilStyles from '@styles/utils.module.scss'
import { PageHeader, PageSubtitle, PageTitle } from '@components/custom-tw-components';
import profileImg from '../public/images/profile.jpg';

export default function About() {
    const customMeta = {
        title: `${metadata.title} - About`
    }
    return (
        <Container customMeta={customMeta}>
            <Image priority className={utilStyles.circleImage} src={profileImg} width={120} height={120} alt="Blue.gif" />
            <PageHeader>
                <PageTitle>{"Hi, I'm Blue."}</PageTitle>
                <PageSubtitle>
                    {"I'm a frontend engineer."}
                </PageSubtitle>
                <email>
                    <Link href={"mailto:eu.blue@pm.me?subject=Request from euisblue.me"} target="_blank" rel="noreferrer">
                        <a className={`text-secondary dark:text-dsecondary`}> example@email.com </a>
                    </Link>
                </email>
            </PageHeader>

            <hr />
            <div className={`text-pramiry dark:text-dprimary`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt enim sed nunc sollicitudin,
                     eget accumsan neque euismod. Donec aliquam dapibus velit ut aliquet. Nunc et imperdiet tortor, at rutrum enim. 
                     Donec rhoncus porttitor eros, sed bibendum orci ultrices eu. Ut viverra nisi congue, varius erat dignissim, faucibus eros. 
                     Cras et convallis lorem, non porta lorem. Maecenas non turpis semper, varius sapien in, semper nulla. 
                     Cras eget metus vitae quam bibendum sagittis. Cras volutpat est ipsum, sed rutrum lorem tempus sit amet. Aliquam erat volutpat. 
                     Vivamus sed ullamcorper quam. Pellentesque pharetra metus sed nibh dapibus egestas. Ut tellus est, pulvinar id pretium et, lobortis ac erat.
                </p>
                <p>
                    Pellentesque posuere ac velit a tincidunt. Donec interdum elit in neque ullamcorper rhoncus. 
                    Aenean faucibus placerat libero, a volutpat turpis. Phasellus pellentesque luctus orci id congue. 
                    In at scelerisque eros. Vestibulum pellentesque tortor vitae orci ultricies egestas. Proin sed gravida dui. 
                    Donec vehicula lacus eu nibh faucibus fermentum. Suspendisse pretium hendrerit lectus. Aenean ultricies vestibulum ullamcorper. 
                    Duis elementum pretium dolor, quis euismod purus euismod feugiat. Ut pharetra scelerisque elit ut placerat. Ut efficitur ornare nisi, ut rhoncus nisi ultricies a. 
                    Aenean fermentum metus nec ante scelerisque, eu lacinia metus convallis. Nullam malesuada mauris id consectetur rhoncus. Duis a vehicula nisi.
                </p>
            </div>
            <hr />
            <Footer />
        </Container>
    )
}