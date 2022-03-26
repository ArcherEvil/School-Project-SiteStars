import { useRouter } from 'next/router';

const search = () => {
    const router = useRouter();
    console.log(router.query.name);
    return (
        <div>search</div>
    )
}

export default search