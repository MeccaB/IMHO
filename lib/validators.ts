import { z } from 'zod';
export const reviewInput = z.object({ businessId:z.string().cuid(), rating:z.number().int().min(1).max(5), title:z.string().min(3).max(120), body:z.string().min(20).max(5000) });
export const commentInput = z.object({ reviewId:z.string().cuid(), parentId:z.string().cuid().optional(), body:z.string().min(2).max(2000) });
export const voteInput = z.object({ target:z.enum(['REVIEW','COMMENT']), targetId:z.string().cuid(), value:z.enum(['UP','DOWN']) });
