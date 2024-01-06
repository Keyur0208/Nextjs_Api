import Link from "next/link"

export default function Back(props) {
    return (
        <div className="pt-3"  >
            <Link href={props.link} style={{ textDecoration: 'none' }} >
                <button className="btn btn-light btn-lg" >
                    <img src="/backward-solid (2).svg" className="p-1" />
                    Back
                </button>
            </Link>
        </div>
    )
}