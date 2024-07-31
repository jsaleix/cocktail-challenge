"server-only";

if (!process.env.COCKTAIL_API_ENDPOINT) {
    throw new Error("Missing environment variables for cocktail API");
}
export const COCKTAIL_API_ENDPOINT = process.env
    .COCKTAIL_API_ENDPOINT as string;
export const COCKTAIl_API_KEY = process.env.COCKTAIl_API_KEY;
