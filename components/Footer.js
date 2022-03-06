import metadata from "@data/metadata"
import Image from "next/image"
import Link from "next/link"
import { FooterContainer } from "./custom-tw-components"

const Footer = () => {
    const sns = [
        { name: 'github', link: metadata.social.github },
        { name: 'twitter', link: metadata.social.twitter }
    ]
    return (
        <FooterContainer>
            <div className="snsLinks flex items-center justify-center">
                {
                    sns.map((social) => (
                        <Link href={social.link} key={social.link} passHref>
                            <a className={"px-1"}>
                                <Image
                                    priority
                                    src={`/images/social/${social.name}.svg`}
                                    height={18}
                                    width={18}
                                    alt={social.name}
                                />
                            </a>
                        </Link>
                    ))
                }
            </div>
            <div>© 2022 <a href="https://www.euisblue.me/">Blue Log</a>. Powered by&nbsp;<a href="https://vercel.com/">Vercel</a></div>
        </FooterContainer>
    )
}

export default Footer