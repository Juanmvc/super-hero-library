import { MarvelBaseRepository, md5Hash } from '../MarvelBaseRepository';

export default class HeroListRepository<T> extends MarvelBaseRepository {
  async getData({
    limit = 50,
  }: {
    limit: number,
  }) {
    const publicKey = process.env.MARVEL_PUBLIC_KEY ? process.env.MARVEL_PUBLIC_KEY : '';
    const privateKey = process.env.MARVEL_PRIVATE_KEY ? process.env.MARVEL_PRIVATE_KEY : '';
    const timeStamp = Date.now();

    const encryptedKey = md5Hash(timeStamp + privateKey + publicKey);
    return await this.get<T>(`characters?limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${encryptedKey}`);
  }
}
