const IMGBB_API_KEY ="aabcb766cd8686769637c5f5901aeb9b";
const ENDOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch(`${ENDOINT}?key=${IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.error?.message || "Error al subir la imagen");
        }

        return data.data?.url;
    } catch (error) {
        console.error("ImgBB Error: ", error);
        throw error;
    }
};