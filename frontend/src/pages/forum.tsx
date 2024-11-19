import ComingSoon from "@/ui/coming-soon";

export async function getStaticProps() {
    console.log("getStaticProps executed");
    return {
        props: {
            posts: 1111,
        },
    };
}

export default function Forum({posts}: { posts: number }) {
    console.log("Props in browser:", posts);
    return (
        <div>
            {/*<h1>Home Page</h1>*/}
            {/*<p>Posts: {posts}</p>*/}
            <ComingSoon/>
        </div>
    );
}
