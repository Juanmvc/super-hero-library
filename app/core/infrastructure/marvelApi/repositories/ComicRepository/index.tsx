import { MARVEL_PUBLIC_KEY, MarvelBaseRepository, md5Hash } from '../MarvelBaseRepository';

export default class ComicRepository<T> extends MarvelBaseRepository {
  async getData({
    id,
  }: {
    id: number,
  }) {
    const publicKey = MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY ? process.env.MARVEL_PRIVATE_KEY : '';
    const timeStamp = Date.now();

    const encryptedKey = md5Hash(timeStamp + privateKey + publicKey);
        
    return await this.get<T>(`comics/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${encryptedKey}`);
  }
}
