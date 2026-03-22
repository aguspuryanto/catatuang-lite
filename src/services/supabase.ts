import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type TransactionType = 'income' | 'expense';

export enum MainCategory {
  INCOME = 'Pemasukan',
  MORTGAGE = 'Angsuran KPR',
  DAILY = 'Kebutuhan Harian',
  EMERGENCY = 'Dana Darurat',
  INVESTMENT = 'Investasi',
  SOCIAL = 'Dana Sosial/Cadangan',
  LOAN = 'Pinjaman'
}

export type SubCategory =
  | 'Iuran & Air' | 'Internet' | 'Listrik' | 'Bensin' | 'Pulsa' | 'Makan' | 'Belanja Online' | 'Dan lain2'
  | 'Saham' | 'Reksadana' | 'Kripto' | 'Deposito'
  | 'Pinjaman Online' | 'Pinjaman Pribadi' | 'Pinjaman Bank' | 'Cicilan Kartu Kredit'
  | 'Pembayaran Hutang' | 'Tabungan'
  | 'None';

export interface Transaction {
  id: string;
  type: TransactionType;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  amount: number;
  createdAt: string;
  description: string;
}

/**
 * Fetch all transactions from the database, ordered by creation date (newest first).
 */
export async function getTransactions(): Promise<Transaction[]> {
  const { data, error } = await supabase
    .from('transaksi')
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }

  return data as Transaction[];
}

/**
 * Create a new transaction in the database.
 */
export async function createTransaction(transaction: Omit<Transaction, 'id' | 'createdAt'>): Promise<Transaction> {
  const { data, error } = await supabase
    .from('transaksi')
    .insert([transaction])
    .select()
    .single();

  if (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }

  return data as Transaction;
}

/**
 * Remove a transaction from the database by its ID.
 */
export async function removeTransaction(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('transaksi')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }

  return true;
}
